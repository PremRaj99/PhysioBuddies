import cryoto from "crypto";
import EmailVerification from "../models/emailVerification.model.js";

export default async function generateCrypto(userId, email) {
  const token = crypto.randomBytes(20).toString("hex");
  const expiredIn = new Date(date.getTime() + 5 * 60000); // 5 minutes from now

  try {
    const emailExist = await EmailVerification.findOne({ email });
    if (emailExist) {
      emailExist.token = token;
      emailExist.expiredIn = expiredIn;

      await emailExist.save();
    } else {
      const emailVerification = new EmailVerification({
        userId,
        email,
        token,
        expiredIn,
      });

      await emailVerification.save();
    }

    return token;
  } catch (error) {
    return error;
  }
}
