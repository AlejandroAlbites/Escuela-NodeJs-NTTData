import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

import { handlerHttp } from "../utils/error.handler";
const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseRegister = await registerNewUser(body);
    res.send(responseRegister);
  } catch (error) {
    handlerHttp(res, "ERROR_GET_ITEM", error);
  }
};

const loginCrtl = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;

    const responseLogin = await loginUser({ email, password });

    if (responseLogin === "PASSWORD INCORRECT") {
      res.status(403);
    }

    res.send(responseLogin);
  } catch (error) {
    handlerHttp(res, "ERROR_GET_ITEM", error);
  }
};

export { loginCrtl, registerCtrl };
