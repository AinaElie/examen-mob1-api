import * as cors from "cors";
import * as express from "express";

import { errorHandler } from "@/middlewares";
import { authRouter, swaggerRouter } from "@/routes";

export const server = async () => {
  try {
    const PORT = process.env.PORT || 8080;

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use("/auth", authRouter);
    app.use("/", swaggerRouter);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    app.use(errorHandler);
  } catch (err) {
    console.log(err);
  }
};
