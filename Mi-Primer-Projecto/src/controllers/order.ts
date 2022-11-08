import { Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { handlerHttp } from "../utils/error.handler";

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "Esto solo es accesible con session (JWT)",
      user: req.user,
    });
  } catch (error) {
    handlerHttp(res, "HTTP_GET_BLOGS");
  }
};

export { getItems };
