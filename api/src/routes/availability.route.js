import express from "express";
import verifyJWT, { verifyTherapist } from "../middlewares/auth.middleware.js";
import {
  createAvailability,
  getAvailabilities,
  getAvailability,
} from "../controllers/availability.controller.js";

const router = express.Router();

router.get("/:id", getAvailability);
router.get("/", getAvailabilities);
router.post("/", verifyJWT, verifyTherapist, createAvailability);

export default router;
