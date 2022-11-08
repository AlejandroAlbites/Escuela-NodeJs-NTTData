import { Router } from "express";
import { loginCrtl, registerCtrl } from "../controllers/auth";
import { logMiddleware } from "../middleware/logMiddleware";

const router = Router();

router.post("/register", logMiddleware, registerCtrl);
router.post("/login", logMiddleware, loginCrtl);

export { router };
