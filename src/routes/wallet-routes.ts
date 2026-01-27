import * as express from "express";

import { WalletController } from "@/controllers";
import { paginationHandler } from "@/middlewares";

export const walletRouter = express.Router();

walletRouter.post("/", WalletController.create);
walletRouter.get("/", paginationHandler, WalletController.getAll);
walletRouter.put("/:walletId", WalletController.update);
walletRouter.get("/:walletId", WalletController.getOne);
