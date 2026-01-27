import { RequestHandler } from "express";
import { v4 } from "uuid";

import { getPrismaClient } from "@/configs";
import { BadRequestError } from "@/errors";
import { AccountServices } from "@/services";
import { AccountValidator } from "@/validator";

export class AccountController {
  static readonly signIn: RequestHandler = async (req, res, next) => {
    try {
      const { username, password } = req.body;

      AccountValidator.create({ username, password });

      const data = await AccountServices.signIn(username, password);
      res.json(data);
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
  static readonly signUp: RequestHandler = async (req, res, next) => {
    const account = req.body;

    const accountExistUsername = await getPrismaClient().account.findUnique({ where: { username: account.username } });

    AccountValidator.create(account);

    if (accountExistUsername) {
      BadRequestError("Username=" + account.username + " is already used", next);
    }

    const createdUser = await AccountServices.singUp(v4(), account);

    res.json(createdUser);
  };
}
