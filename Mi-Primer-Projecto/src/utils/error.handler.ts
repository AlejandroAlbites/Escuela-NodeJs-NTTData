import { Response } from "express";
const handlerHttp = (response: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  response.status(500);
  response.send({ error });
};

export { handlerHttp };
