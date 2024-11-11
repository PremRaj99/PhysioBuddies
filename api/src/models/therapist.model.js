import mongoose from "mongoose";

const therapistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    specializations: {
      type: [String],
      required: true,
    },
    qualifications: {
      type: [String],
      required: true,
    },
    availableRegions: {
      type: [String],
      required: true,
    },
    hourlyRate: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Therapist = mongoose.model("Therapist", therapistSchema);

export default Therapist;
