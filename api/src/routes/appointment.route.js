import express from "express";
import verifyJWT, {
  verifyAdmin,
  verifyTherapist,
  verifyUser,
} from "../middlewares/auth.middleware.js";
import {
  completeAppointment,
  createAppointment,
  deleteAppointment,
  getAppointment,
  getAppointments,
  updateAppointment,
} from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/", verifyJWT, verifyUser, createAppointment);
router.get("/", verifyJWT, getAppointments);
router.get("/:id", verifyJWT, getAppointment);
router.put("/:id", verifyJWT, updateAppointment);
router.post("/:id/complete", verifyJWT, verifyTherapist, completeAppointment);
router.delete("/:id", verifyJWT, verifyAdmin, deleteAppointment);

export default router;
