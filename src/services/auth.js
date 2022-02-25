import bcrypt from "bcryptjs";

export const checkPassword = (user, password) =>
  bcrypt.compare(password, user.password);
