import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { router } from "./routers";
import { dbConnect } from "./config/mongo";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
dbConnect().then(() => {
  console.log("connection db successfull");
});
// app.use(
//   cors({
//     origin: ["http:localhost:3000"],
//   })
// );

app.listen(PORT, () => console.log(`Listo en el puerto ${PORT}`));
