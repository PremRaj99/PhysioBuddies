import Notification from "../models/notification.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getNotifications = asyncHandler(async (req, res) => {
  try {
    const { _id, role } = req.user;
    let notification;
    if (role === "therapist" || role === "user") {
      notification = await Notification.find({ userId: _id }).sort({
        createdAt: -1,
      });
    }
    if (role === "admin") {
      notification = await Notification.find().sort({ createdAt: -1 });
    }
    if (!notification) {
      throw new ApiError(404, "No notifications found");
    }

    res.status(200).json(ApiResponse(200, notification, "fetch notifications"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const getNotification = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);
    if (!notification) {
      throw new ApiError(404, "Notification not found");
    }
    res.status(200).json(ApiResponse(200, notification, "fetch notification"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const createNotification = asyncHandler(async (req, res) => {
  try {
    const { userId, message } = req.body;
    const notification = new Notification({ userId, message });
    await notification.save();
    res.status(201).json(ApiResponse(201, notification, "Notification created"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const readNotification = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);
    if (!notification) {
      throw new ApiError(404, "Notification not found");
    }
    notification.isRead = true;
    await notification.save();
    res.status(200).json(ApiResponse(200, notification, "Notification read"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const updateNotification = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, message, isRead } = req.body;
    const notification = await Notification.findById(id);
    if (!notification) {
      throw new ApiError(404, "Notification not found");
    }
    notification.userId = userId;
    notification.message = message;
    notification.isRead = isRead;
    await notification.save();
    res.status(200).json(ApiResponse(200, notification, "Notification updated"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const deleteNotification = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);
    if (!notification) {
      throw new ApiError(404, "Notification not found");
    }

    await notification.remove();
    res.status(200).json(ApiResponse(200, {}, "Notification deleted"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});
