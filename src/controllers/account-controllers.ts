import { RequestHandler } from "express";
import { v4 } from "uuid";

import { getPrismaClient } from "@/configs";
import { BadRequestError } from "@/errors";
import { AccountServices } from "@/services";

export class AccountController {
  static readonly signIn: RequestHandler = async (req, res, _next) => {
    try {
      const { username, password } = req.body;
      const data = await AccountServices.signIn(username, password);
      res.json(data);
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
  static readonly signUp: RequestHandler = async (req, res, next) => {
    const account = req.body;

    const accountExistUsername = await getPrismaClient().account.findUnique({ where: { username: account.username } });
    if (accountExistUsername) {
      BadRequestError("Username=" + account.username + " is already used", next);
    }

    const createdUser = await AccountServices.singUp(v4(), account);

    res.json(createdUser);
  };
}
