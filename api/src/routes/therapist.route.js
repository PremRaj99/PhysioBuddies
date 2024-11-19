import express from "express";
import verifyJWT, {
  verifyAdmin,
  verifyTherapist,
} from "../middlewares/auth.middleware.js";
import {
  createTherapist,
  deleteTherapist,
  getTherapist,
  getTherapists,
  updateTherapist,
} from "../controllers/therapist.controller.js";

const router = express.Router();

router.get("/", getTherapists);
router.get("/:id", getTherapist);
router.post("/", verifyJWT, verifyTherapist, createTherapist);
router.put("/:id", verifyJWT, verifyTherapist, updateTherapist);
router.delete("/:id", verifyJWT, deleteTherapist);
router.put("/verify/:id", verifyJWT, verifyAdmin, verifyTherapist);

export default router;
