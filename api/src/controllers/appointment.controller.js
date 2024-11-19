import Appointment from "../models/appointment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createAppointment = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { date, time, doctorId, address, city, region, notes } = req.body;

    if (!date || !time || !doctorId || !address || !city || !region) {
      res.status(400);
      throw new ApiError(400, "Please fill in all fields");
    }

    const appointment = new Appointment({
      patientId: _id,
      therapistId: doctorId,
      date,
      time,
      location: { address, city, region },
      notes,
    });

    await appointment.save();

    res.status(201).json(ApiResponse(201, appointment, "Appointment created"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
  res.status(201).json({ message: "Appointment created" });
});

export const getAppointments = asyncHandler(async (req, res) => {
  try {
    const { _id, role } = req.user;
    let appointments;

    if (role === "admin") {
      appointments = await Appointment.find();
    }

    if (role === "therapist") {
      appointments = await Appointment.find({ therapistId: id });
    }

    if (role === "user") {
      appointments = await Appointment.find({ patientId: id });
    }

    res
      .status(200)
      .json(ApiResponse(200, appointments, "Appointments retrieved"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const getAppointment = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);

    if (!appointment) {
      res.status(404);
      throw new ApiError(404, "Appointment not found");
    }
    if (
      appointment.patientId !== req.user._id &&
      appointment.therapistId !== req.user._id
    ) {
      res.status(403);
      throw new ApiError(
        403,
        "You are not authorized to view this appointment"
      );
    }

    res.status(200).json(ApiResponse(200, appointment, "Appointment retrieved"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const updateAppointment = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { date, time, address, city, region, notes } = req.body;

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      res.status(404);
      throw new ApiError(404, "Appointment not found");
    }

    if (appointment.patientId !== req.user._id) {
      res.status(403);
      throw new ApiError(
        403,
        "You are not authorized to update this appointment"
      );
    }

    appointment.date = date;
    appointment.time = time;
    appointment.location = { address, city, region };
    appointment.notes = notes;

    await appointment.save();

    res
      .status(200)
      .json(ApiResponse(200, appointment, "Appointment updated successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const completeAppointment = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id).populate(
      "therapistId",
      "name"
    );

    if (!appointment) {
      res.status(404);
      throw new ApiError(404, "Appointment not found");
    }

    if (appointment.therapistId.id !== req.user._id) {
      res.status(403);
      throw new ApiError(
        403,
        "You are not authorized to complete this appointment"
      );
    }

    appointment.status = "completed";

    await appointment.save();

    res
      .status(200)
      .json(ApiResponse(200, appointment, "Appointment completed successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const deleteAppointment = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      res.status(404);
      throw new ApiError(404, "Appointment not found");
    }

    if (appointment.patientId !== req.user._id) {
      res.status(403);
      throw new ApiError(
        403,
        "You are not authorized to delete this appointment"
      );
    }

    await appointment.remove();

    res
      .status(200)
      .json(ApiResponse(200, {}, "Appointment deleted successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});
