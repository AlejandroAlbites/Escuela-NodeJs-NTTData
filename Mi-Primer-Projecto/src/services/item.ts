import { Car } from "../interfaces/car.interface";
import ItemCar from "../models/item";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemCar.create(item);
  return responseInsert;
};

const getCar = async (id: string) => {
  const responseItem = await ItemCar.findOne({ _id: id });

  return responseItem;
};

const getCars = async () => {
  const responseItems = await ItemCar.find();
  return responseItems;
};

const updateCar = async (id: string, item: Car) => {
  //   const itemCar = await ItemCar.findById(id);
  //   if (!itemCar) {
  //     console.log("item not found");
  //   }
  const updateCar = await ItemCar.findByIdAndUpdate(id, item, {
    new: true,
    runValidators: true,
    context: "query",
  });
  return updateCar;
};

const deleteCar = async (id: string) => {
  const responseItem = await ItemCar.findByIdAndDelete(id);
  return responseItem;
};
export { insertCar, getCar, getCars, updateCar, deleteCar };
