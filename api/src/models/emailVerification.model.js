import mongoose from "mongoose";

const emailVerificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type: String,
        required: true
    },
    expiredIn: {
        type: Date,
        required: true
    }
});

const EmailVerification = mongoose.model("EmailVerification", emailVerificationSchema)

export default EmailVerification;