import { Router } from "express";
import { checkJwt } from "../middleware/session";
import multerMiddleware from "../middleware/file";
import { addFile } from "../controllers/upload";
const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), addFile);
export { router };
