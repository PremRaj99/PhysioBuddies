import Availability from "../models/availablity.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAvailability = asyncHandler(async (req, res) => {
  try {
    const availability = await Availability.findById(req.params.id);
    if (!availability) {
      throw new ApiError(404, "Availability not found");
    }

    res.status(200).json(ApiResponse(200, availability, "Success"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const getAvailabilities = asyncHandler(async (req, res) => {
  try {
    const availabilities = await Availability.find();
    res.status(200).json(ApiResponse(200, availabilities, "Success"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const createAvailability = asyncHandler(async (req, res) => {
  try {
    const { day, date, timeSlots } = req.body;
    const therapistId = req.user._id;

    const availability = await Availability.create({
      therapistId,
      day,
      date,
      timeSlots,
    });
    res.status(201).json(ApiResponse(201, availability, "Availability created"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});
