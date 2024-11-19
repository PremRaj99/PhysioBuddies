import express from "express";
import verifyJWT, {
  verifyAdmin,
  verifyUser,
} from "../middlewares/auth.middleware.js";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", verifyUser, verifyAdmin, getUsers);
router.get("/:id", verifyJWT, getUser);
router.put(
  "/:id",
  verifyJWT,
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  updateUser
);
router.delete("/:id", verifyJWT, deleteUser);

export default router;
