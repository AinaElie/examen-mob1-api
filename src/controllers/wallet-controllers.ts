import { RequestHandler } from "express";

import { WalletMapper } from "@/mappers";
import { WalletServices } from "@/services";
import { WalletValidator } from "@/validator";

export class WalletController {
  static readonly create: RequestHandler = async (req, res, next) => {
    try {
      const accountId = (req as any).account.id;
      WalletValidator.create(req.body);
      const data = await WalletServices.create(accountId, req.body);
      res.json(WalletMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };
  static readonly update: RequestHandler = async (req, res, next) => {
    try {
      const wallet = req.body;
      const accountId = (req as any).account.id;
      const { walletId } = req.params;
      WalletValidator.update(accountId, wallet);
      const data = await WalletServices.update(accountId, { ...wallet, id: walletId });
      res.json(WalletMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };
  static readonly getOne: RequestHandler = async (req, res, next) => {
    try {
      const { walletId } = req.params;
      const accountId = (req as any).account.id;
      const data = await WalletServices.getOneById(accountId, walletId as string);
      res.json(WalletMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };
  static readonly getAll: RequestHandler = async (req, res, next) => {
    try {
      const { page, pageSize } = req as any;
      const accountId = (req as any).account.id;
      const data = await WalletServices.getAll(accountId, { page, pageSize });
      res.json(data.map(WalletMapper.toRest));
    } catch (err) {
      next(err);
    }
  };
}
