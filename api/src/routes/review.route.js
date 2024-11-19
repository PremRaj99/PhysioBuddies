import express from "express";
import verifyJWT, { verifyUser } from "../middlewares/auth.middleware.js";
import { createReview, getReviews } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", verifyJWT, verifyUser, createReview);
router.get("/:id", verifyJWT, getReviews);

export default router;
