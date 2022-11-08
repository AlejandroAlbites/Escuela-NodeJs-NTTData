import { Response } from "express";
import { Storage } from "../interfaces/storage";
import { registerUpload } from "../services/upload";
import { handlerHttp } from "../utils/error.handler";
import { RequestExt } from "./../interfaces/req-ext";

const addFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      path: `${file?.path}`,
      idUser: `${user?.id}`,
    };

    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (error) {
    handlerHttp(res, "ERROR_GET_BLOGS");
  }
};

export { addFile };
