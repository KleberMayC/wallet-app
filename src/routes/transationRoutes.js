import { Router } from "express";
import transationController from "../controllers/transationController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post("/transactions", transationController.create);
transactionRouter.get("/transactions", transationController.findAllByUser);

export default transactionRouter;
