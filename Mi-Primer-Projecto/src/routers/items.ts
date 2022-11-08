import { Router } from "express";
import {
  addItem,
  getItem,
  getItems,
  updateItems,
  deleteItem,
} from "../controllers/items";
import { logMiddleware } from "../middleware/logMiddleware";

const router = Router();

router.get("/:id", logMiddleware, getItem);
router.get("/", logMiddleware, getItems);
router.post("/", logMiddleware, addItem);
router.put("/:id", logMiddleware, updateItems);
router.delete("/:id", logMiddleware, deleteItem);
export { router };
