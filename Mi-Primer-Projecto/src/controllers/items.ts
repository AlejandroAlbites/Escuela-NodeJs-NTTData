import { Request, Response } from "express";
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../services/item";
import { handlerHttp } from "../utils/error.handler";
const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handlerHttp(res, "ERROR_GET_ITEM", error);
  }
};

const getItems = async (request: Request, res: Response) => {
  try {
    const response = await getCars();
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handlerHttp(res, "ERROR_GET_ITEMS", error);
  }
};

const updateItems = async ({ body, params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handlerHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const addItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (error) {
    handlerHttp(res, "ERROR_ADD_ITEM");
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handlerHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, addItem, updateItems, deleteItem };
