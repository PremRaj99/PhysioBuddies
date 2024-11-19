import express from "express";
import {
  login,
  refreshAccessToken,
  signout,
  signup,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post(
  "/signup",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  signup
);
router.post("/verify", verifyJWT, verifyEmail);
router.post("/signout", verifyJWT, signout);
router.post("/refresh", refreshAccessToken);

export default router;
