import * as express from "express";

import { TransactionController } from "@/controllers";
import { paginationHandler } from "@/middlewares";

export const transactionRouter = express.Router({ mergeParams: true });

transactionRouter.post("/", TransactionController.create);
transactionRouter.get("/", paginationHandler, TransactionController.getAll);
transactionRouter.put("/:transactionId", TransactionController.update);
transactionRouter.get("/:transactionId", TransactionController.getOne);
