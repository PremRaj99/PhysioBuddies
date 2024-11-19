import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
// import User from "../models/user.model.js";

export default async function verifyJWT(req, res, next) {
  try {
    const token =
      req.cookie?.accessToken ||
      req.header("Authorization")?.replace("Beader ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // const user = await User.findById(decodedToken?._id).select(
    //   "-password -refreshToken"
    // );

    // if (!user) {
    //   throw new ApiError(401, "Invalid Access Token");
    // }

    req.user = decodedToken;
    next();
  } catch (error) {
    throw new ApiError(500, "Something went wrong in JWT verification");
  }
}

export async function verifyAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    throw new ApiError(403, "Forbidden");
  }
  next();
}

export async function verifyTherapist(req, res, next) {
  if (req.user.role !== "therapist") {
    throw new ApiError(403, "Forbidden");
  }
  next();
}

export async function verifyUser(req, res, next) {
  if (req.user.role !== "user") {
    throw new ApiError(403, "Forbidden");
  }
  next();
}
