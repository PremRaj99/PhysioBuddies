import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// import you API routers
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import therapistRouter from "./routes/therapist.route.js";
import notificationRouter from "./routes/notification.route.js";
import reviewRouter from "./routes/review.route.js";
import appointmentRouter from "./routes/appointment.route.js";
import availabilityRouter from "./routes/availability.route.js";
import paymentRouter from "./routes/payment.route.js";
import blogRouter from "./routes/blog.route.js";

// define your API routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/therapist", therapistRouter);
app.use("/api/v1/notification", notificationRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/availability", availabilityRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/blog", blogRouter);

app.get("/", (req, res) => {
  res.send("Welcome to PhysioBuddies API");
});

app.use((err, req, res, next) => {
  console.log(err.message);
  return res.status(err.statusCode || 500).json({
    statusCode: err.statusCode || 500,
    data: null,
    message: err.message || "Internal Server Error",
    success: false,
  });
});

export default app;
