"use server";

import {
  deletePasswordResetToken,
  generatePasswordResetToken,
  getPasswordResetTokenByToken
} from "@/db/queries/auth/reset-token";
import { getUserByEmail, updateUserPassword } from "@/db/queries/users";
import { sendPasswordResetEmail } from "@/email-templates/password-reset";
import { hashPassword } from "@/utils/password";
import {
  NewPasswordType,
  NewPasswordValidation,
  ResetType,
  ResetValidation
} from "@/validations";

export const passwordResetRequest = async (values: ResetType) => {
  try {
    const validateEmail = ResetValidation.safeParse(values);
    if (!validateEmail.success) {
      return { error: true, message: "Invalid email!" };
    }
    const { email } = validateEmail.data;
    const user = await getUserByEmail(email);
    if (!user) {
      return { error: true, message: "User not found!" };
    }
    const resetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(resetToken.email, resetToken.token);
    return { success: "Password reset link sent to your email!" };
  } catch (error) {
    console.error(error);
    return { error: true, message: "something went wrong!" };
  }
};

export const passwordReset = async (
  values: NewPasswordType,
  token?: string | null
) => {
  if (!token) {
    return { error: true, message: "Invalid token!" };
  }
  const validatedFields = NewPasswordValidation.safeParse(values);
  if (!validatedFields.success) {
    return { error: true, message: "Invalid fields!" };
  }
  const { password } = validatedFields.data;
  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) {
    return { error: true, message: "Invalid token!" };
  }
  if (existingToken.expires < new Date()) {
    return { error: true, message: "Token has expired!" };
  }
  const user = await getUserByEmail(existingToken.email);
  if (!user) {
    return { error: "User not found!" };
  }
  const hashedPassword = await hashPassword(password);

  const [updated] = await Promise.all([
    updateUserPassword(user.id, hashedPassword),
    deletePasswordResetToken(existingToken.id)
  ]);
  if (!updated)
    return { error: true, message: "User not updated! Please try again." };
  return {
    success: true,
    message: "Password reset successful! Please login to continue."
  };
};
