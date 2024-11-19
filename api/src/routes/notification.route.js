import express from "express";
import verifyJWT, { verifyAdmin } from "../middlewares/auth.middleware.js";
import {
  createNotification,
  deleteNotification,
  getNotification,
  getNotifications,
  readNotification,
  updateNotification,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", verifyJWT, getNotifications);
router.get("/:id", verifyJWT, getNotification);
router.post("/", verifyJWT, verifyAdmin, createNotification);
router.post("/read/:id", verifyJWT, readNotification);
router.put("/:id", verifyJWT, verifyAdmin, updateNotification);
router.delete("/:id", verifyJWT, verifyAdmin, deleteNotification);

export default router;
