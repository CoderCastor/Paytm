import crypto, { BinaryLike } from "node:crypto";
import { HASH_SECRET } from "../config";


export const hashPassword = (password: BinaryLike) => {
  const passwordHash = crypto.scryptSync(password, HASH_SECRET, 32);
  return passwordHash.toString("hex");
};

export const verifyPassword = (
  password: BinaryLike,
  databasePassword: String
) => {
  const passwordHash = crypto.scryptSync(password, HASH_SECRET, 32);
  let currentPassowrdHash: String = passwordHash.toString("hex");

  if (databasePassword === currentPassowrdHash) return true;
  return false;
};