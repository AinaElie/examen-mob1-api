import * as express from "express";

import { LabelController } from "@/controllers";
import { paginationHandler, securityHandler } from "@/middlewares";

export const labelRouter = express.Router();

labelRouter.post("/", LabelController.create);
labelRouter.put("/", LabelController.update);
labelRouter.get("/", paginationHandler, LabelController.getAll);
labelRouter.get("/:id", LabelController.getOne);
