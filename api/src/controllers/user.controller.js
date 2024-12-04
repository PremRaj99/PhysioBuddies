import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import generateCrypto from "../utils/generateCryptoCode.js";

export const getUsers = asyncHandler(async (req, res) => {
  try {
    const { page = 1, limit = 10, q, sort } = req.query;

    const query = q ? { $regex: new RegExp(q), $options: "i" } : {};
    const users = await User.find(
      {
        $or: [
          { email: query },
          { username: query },
          { fullName: query },
          { phone: query },
          { role: query },
        ],
      },
      { password: 0, refreshToken: 0 }
    )
      .sort(sort || "createdAt")
      .limit(limit)
      .skip((page - 1) * limit);

    users.forEach((user) => {
      const { password, refreshToken, ...rest } = user._doc;
      return rest;
    });

    res.json(new ApiResponse(200, users, "fetch successful"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const getUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    if (req.user._id !== id && req.user.role !== "admin") {
      throw new ApiError(403, "you are not authorized to view this user");
    }

    const user = await User.findById(id);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const { password, refreshToken, ...rest } = user._doc;
    res.json(new ApiResponse(200, rest, "fetch successful"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, phone } = req.body;

    if (req.user._id !== id && req.user.role !== "admin") {
      throw new ApiError(403, "you are not authorized to update this user");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    let avatarUrl = null;

    if (avatarLocalPath) {
      const avatar = await uploadOnCloudinary(avatarLocalPath);
      if (avatar) {
        avatarUrl = avatar.url;
      }
    }

    const user = await User.findById(id);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.avatar = avatarUrl || user.avatar;

    if (email) {
      user.isVerified = false;
      const token = generateCrypto(user._id, email);
    }

    const updatedUser = await user.save();

    const { password, refreshToken, ...rest } = updatedUser._doc;

    res.json(new ApiResponse(200, rest, "update successful"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    if (req.user._id !== id && req.user.role !== "admin") {
      throw new ApiError(403, "you are not authorized to delete this user");
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    res.json(new ApiResponse(200, null, "delete successful"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});
