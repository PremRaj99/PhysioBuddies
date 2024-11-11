import mongoose from "mongoose";

const availablitySchema = new mongoose.Schema(
  {
    therapistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Therapist",
      required: true,
    },
    day: {
      type: String,
      enum: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    timeSlots: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Availablity = mongoose.model("Availablity", availablitySchema);

export default Availablity;
