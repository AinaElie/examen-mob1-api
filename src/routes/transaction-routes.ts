import * as express from "express";

import { TransactionController } from "@/controllers";
import { paginationHandler } from "@/middlewares";

export const transactionRouter = express.Router();

transactionRouter.post("/", TransactionController.create);
transactionRouter.get("/", paginationHandler, TransactionController.getAll);
transactionRouter.put("/:transactionId", TransactionController.update);
transactionRouter.get("/:transactionId", TransactionController.getOne);
