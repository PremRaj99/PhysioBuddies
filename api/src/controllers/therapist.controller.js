import Therapist from "../models/therapist.model.js";
import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getTherapists = asyncHandler(async (req, res) => {
  try {
    const { page = 1, limit = 10, q, sort } = req.query;
    let therapists;
    const query = q ? { $regex: new RegExp(q), $options: "i" } : {};

    therapists = await Therapist.find({
      $or: [
        { experience: query },
        { specializations: query },
        { qualifications: query },
        { availableRegions: query },
        { hourlyRate: query },
        { ratings: query },
        { reviewCount: query },
        { isVerified: query },
        { isAvailable: query },
      ],
    })
      .populate({
        path: "userId",
        match: { name: query },
        select: "name",
      })
      .sort(sort || "createdAt")
      .limit(limit)
      .skip((page - 1) * limit);

    res.json(new ApiResponse(200, therapists, "fetch successful"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const getTherapist = asyncHandler(async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id).populate({
      path: "userId",
      select: "name",
    });

    if (!therapist) {
      throw new ApiError(404, "Therapist not found");
    }
    res.json(new ApiResponse(200, therapist, "fetch successful"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const createTherapist = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;

    const {
      experience,
      specializations,
      qualifications,
      availableRegions,
      hourlyRate,
    } = req.body;

    if (
      !experience ||
      !specializations ||
      !qualifications ||
      !availableRegions ||
      !hourlyRate
    ) {
      throw new ApiError(400, "All fields are required");
    }

    const therapist = new Therapist({
      userId,
      experience,
      specializations,
      qualifications,
      availableRegions,
      hourlyRate,
    });

    await therapist.save();
    res.json(new ApiResponse(201, therapist, "Therapist created"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const updateTherapist = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const {
      experience,
      specializations,
      qualifications,
      availableRegions,
      hourlyRate,
    } = req.body;

    const therapist = await Therapist.findById(id);
    if (!therapist) {
      throw new ApiError(404, "Therapist not found");
    }

    if (req.user._id.toString() !== therapist.userId.toString()) {
      throw new ApiError(403, "You are not authorized to perform this action");
    }

    therapist.experience = experience || therapist.experience;
    therapist.specializations = specializations || therapist.specializations;
    therapist.qualifications = qualifications || therapist.qualifications;
    therapist.availableRegions = availableRegions || therapist.availableRegions;
    therapist.hourlyRate = hourlyRate || therapist.hourlyRate;

    await therapist.save();

    res.json(new ApiResponse(200, therapist, "Therapist updated"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const deleteTherapist = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const therapist = await Therapist.findById(id);
    if (!therapist) {
      throw new ApiError(404, "Therapist not found");
    }
    if (
      req.user._id.toString() !== therapist.userId.toString() ||
      req.user.role !== "admin"
    ) {
      throw new ApiError(403, "You are not authorized to perform this action");
    }

    const user = await User.findById(therapist.userId);

    await Promise.all([therapist.remove(), user.remove()]);

    res.json(new ApiResponse(200, {}, "Therapist deleted"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const verifyTherapist = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const therapist = await Therapist.findById(id);
    if (!therapist) {
      throw new ApiError(404, "Therapist not found");
    }

    therapist.isVerified = true;
    await therapist.save();

    res.json(new ApiResponse(200, therapist, "Therapist verified"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});
