import { model, Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "nuevo usuario creado ...",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const UserModel = model("User", userSchema);
export default UserModel;
