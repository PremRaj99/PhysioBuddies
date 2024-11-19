import express from "express";
import verifyJWT, { verifyUser } from "../middlewares/auth.middleware.js";
import {
  history,
  pay,
  paymentStatus,
  success,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/pay", verifyJWT, pay);
router.put("/success/:id", verifyJWT, success);
router.get("/history", verifyJWT, verifyUser,  history);
router.get("/status/:id", verifyJWT, verifyUser, paymentStatus);

export default router;
