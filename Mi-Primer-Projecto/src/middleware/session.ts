import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handler";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };

    if (!isUser) {
      res.status(401);
      res.send("NO_TIENE_UN_JWT_VALIDADO");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log("Error checkJwt", checkJwt, e);
    res.status(400);
    res.send("SESSION_INVALIDA");
  }
};

export { checkJwt };
