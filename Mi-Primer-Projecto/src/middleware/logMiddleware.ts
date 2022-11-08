import { NextFunction, Request, Response } from "express";

const logMiddleware = (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  const header = req.headers;
  console.log(header);
  const userAgent = header["user-agent"];
  console.log("user-agent", userAgent);
  next();
};

export { logMiddleware };
