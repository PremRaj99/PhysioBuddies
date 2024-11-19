import Appointment from "../models/appointment.model.js";
import Review from "../models/review.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createReview = asyncHandler(async (req, res) => {
  try {
    const { rating, review, appointmentId } = req.body;
    const { _id: patientId } = req.user;

    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      throw new ApiError(404, "Appointment not found");
    }

    const therapistId = appointment.therapistId;

    const newReview = new Review({
      patientId,
      therapistId,
      appointmentId,
      rating,
      review,
    });

    await newReview.save();

    res.status(201).json(ApiResponse(201, newReview, "Review created"));
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});

export const getReviews = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const reviews = await Review.find({ therapistId: id });

    res.status(200).json(ApiResponse(200, reviews, "Reviews retrieved"));
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});
