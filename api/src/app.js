import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"))

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// import you API routers
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import therapistRouter from './routes/therapist.route.js'
import notificationRouter from './routes/notification.route.js'
import reviewRouter from './routes/review.route.js'
import appointmentRouter from './routes/appointment.route.js'
import availabilityRouter from './routes/availability.route.js'
import paymentRouter from './routes/payment.route.js'


// define your API routers
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/therapist", therapistRouter)
app.use("/api/v1/notification", notificationRouter)
app.use("/api/v1/review", reviewRouter)
app.use("/api/v1/appointment", appointmentRouter)
app.use("/api/v1/availability", availabilityRouter)
app.use("/api/v1/payment", paymentRouter)

export default app;
