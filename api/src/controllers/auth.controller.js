import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/fileUpload.js";
import generateCrypto from "../utils/generateCryptoCode.js";
import EmailVerification from "../models/emailVerification.model.js";

const generateAccessAndRefreshTokens = asyncHandler(async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save();
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh token"
    );
  }
});

export const signup = asyncHandler(async (req, res, next) => {
  const {
    fullName,
    email,
    username,
    password,
    phone,
    role = "user",
  } = req.body;

  if (
    [fullName, email, username, phone, password].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required!");
  }
  const existUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existUser) {
    throw new ApiError(409, "User with this email or username already exists!");
  }
  const avatarLocalPath = req.files?.avatar?.[0]?.path;

  let avatarUrl =
    "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png";

  if (avatarLocalPath) {
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (avatar) {
      avatarUrl = avatar.url;
    }
  }

  if (role !== "therapist" && role !== "user") {
    throw new ApiError(400, "Invalid role");
  }

  const user = await User.create({
    fullName,
    avatar: avatarUrl,
    email,
    password,
    username: username.toLowerCase(),
    phone,
    role: role,
  });

  const token = generateCrypto(user._id, email);

  const createUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { user: createUser, redirect: "/verifyemail" },
        "user registered successfully"
      )
    );
});

export const verifyEmail = asyncHandler(async (req, res, next) => {
  const { email, token } = req.body;

  if (!email || !token) {
    throw new ApiError(400, "token are required!");
  }

  const verifyEmail = await EmailVerification.findOne(email);

  if (!verifyEmail) {
    throw ApiError(400, "email not exist!");
  }
  if (verifyEmail.token !== token) {
    throw ApiError(400, "invalid OTP code");
  }

  if (verifyEmail.expiredIn < new Date()) {
    throw ApiError(400, "OTP code is expired!");
  }

  const user = await User.findOneAndUpdate(
    { email },
    { isVerified: true },
    { new: true }
  );

  if (!user) {
    throw ApiError(400, "user does not exist!");
  }

  const { refreshToken, accessToken } = generateAccessAndRefreshTokens(
    user._id
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user, refreshToken, accessToken },
        "Email verified successfully!"
      )
    );
});

export const login = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  if ((!username && !email) || !password) {
    return next(new ApiError(400, "username/email and password are required!"));
  }

  try {
    const user = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (!user) {
      throw new ApiError(404, "User does not exist!");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials!");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );
    const { password: _, refreshToken: __, ...userData } = user._doc;

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          { user: userData, refreshToken, accessToken },
          "User Logged In Successfully!"
        )
      );
  } catch (error) {
    return next(error); // Forward error to middleware
  }
});

export const signout = asyncHandler(async (req, res, next) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

export const refreshAccessToken = asyncHandler(async (req, res, next) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  const options = {
    httpOnly: true,
    secure: true,
  };
  const decodedToken = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    options
  );

  const user = await User.findById(decodedToken?._id).select("-password");

  if (!user) {
    throw new ApiError(400, "invalid refesh token");
  }
  if (incomingRefreshToken !== user?.refreshToken) {
    throw new ApiError(401, "Refresh token is expired or used");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    decodedToken._id
  );

  const { refreshToken: ref, ...rest } = user._doc;

  return res
    .status(200)
    .cookie("accessToken", accessToken)
    .cookie("refreshToken", refreshToken)
    .json(
      new ApiResponse(
        200,
        { user: rest, accessToken, refreshToken },
        "access token refreshed"
      )
    );
});
