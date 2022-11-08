import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret 123";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "2h" });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isVerify = verify(jwt, JWT_SECRET);

  return isVerify;
};

export { generateToken, verifyToken };
