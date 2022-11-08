import { model, Schema } from "mongoose";

import { Car } from "../interfaces/car.interface";

const itemSchema = new Schema<Car>(
  {
    modelCar: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
      enum: ["gasoline", "electric", "diesel", "alcohol"],
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const ItemCar = model("Item", itemSchema);
export default ItemCar;
