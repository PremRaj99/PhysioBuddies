import Availability from "../models/availablity.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAvailability = asyncHandler(async (req, res, next) => {
  try {
    const availability = await Availability.find({
      therapistId: req.params.id,
    });
    if (!availability) {
      throw new ApiError(404, "Availability not found for this therapist");
    }

    res.status(200).json(new ApiResponse(200, availability, "Success"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const getAvailabilities = asyncHandler(async (req, res, next) => {
  try {
    const { q, page = 1, limit = 10 } = req.query;
    let query = {};
    if (q) {
      query = { $regex: q, $options: "i" };
    }
    const availabilities = await Availability.find({
      $or: [{ day: query }, { date: query }, { timeSlots: query }],
    })
      .skip((page - 1) * limit)
      .limit(limit * 1)
      .exec();
    if (!availabilities) {
      throw new ApiError(404, "No availabilities found for this therapist");
    }
    res.status(200).json(new ApiResponse(200, availabilities, "Success"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const createAvailability = asyncHandler(async (req, res, next) => {
  try {
    const { day, date, timeSlots } = req.body;
    const therapistId = req.user._id;

    const availability = await Availability.create({
      therapistId,
      day,
      date,
      timeSlots,
    });
    res
      .status(201)
      .json(new ApiResponse(201, availability, "Availability created"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});
