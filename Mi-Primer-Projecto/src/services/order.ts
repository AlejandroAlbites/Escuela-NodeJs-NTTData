import ItemCar from "../models/item";

const getOrders = async () => {
  const responseItem = await ItemCar.find({});

  return responseItem;
};

export { getOrders };
