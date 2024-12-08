import Appointment from "../models/appointment.model.js";
import Payment from "../models/payment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const pay = asyncHandler(async (req, res, next) => {
  try {
    const { appointmentId, amount, paymentMethod, transactionId } = req.body;

    const payment = new Payment({
      appointmentId,
      amount,
      paymentMethod,
      paymentStatus: "unpaid",
      transactionId,
    });

    await payment.save();

    res.status(201).json(new ApiResponse(201, payment, "Payment initiated"));
  } catch (error) {
    throw new ApiError(400, "Payment failed");
  }
});

export const success = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const payment = await Payment.findById(id);

    if (!payment) {
      throw new ApiError(404, "Payment not found");
    }

    payment.paymentStatus = "paid";

    await payment.save();

    res.status(200).json(new ApiResponse(200, payment, "Payment successful"));
  } catch (error) {
    throw new ApiError(400, "Payment failed");
  }
});

export const history = asyncHandler(async (req, res, next) => {
  try {
    const { _id } = req.user;

    const appointments = await Appointment.find({ patientId: _id });

    const appointmentIds = appointments.map((appointment) => appointment._id);

    const payments = await Payment.find({
      appointmentId: { $in: appointmentIds },
    });

    if (!payments) {
      throw new ApiError(404, "Payment history not found");
    }

    res.status(200).json(new ApiResponse(200, payments, "Payment history"));
  } catch (error) {
    throw new ApiError(400, "Payment history not found");
  }
});

export const paymentStatus = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const payment = await Payment.findById(id);

    if (!payment) {
      throw new ApiError(404, "Payment not found");
    }

    res.status(200).json(new ApiResponse(200, payment, "Payment status"));
  } catch (error) {
    throw new ApiError(400, "Payment status not found");
  }
});
