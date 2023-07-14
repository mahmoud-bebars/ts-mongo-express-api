import crypto from "crypto";

const SECRET = process.env.PASS_SECRET || "PASS_SECRET";
const HAMC = process.env.HAMC || "sha256";
export const random = () => crypto.randomBytes(128).toString("base64");

export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac(HAMC, [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
