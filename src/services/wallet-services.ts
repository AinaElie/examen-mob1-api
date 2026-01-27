import { CreationWallet, UpdateWallet } from "@clients";
import { v4 } from "uuid";

import { getPrismaClient } from "@/configs";
import { ApiError } from "@/errors";
import { WalletMapper } from "@/mappers";
import { ListFilters } from "@/types";

export class WalletServices {
  static async create(accountId: string, wallet: CreationWallet) {
    const getWalletByName = await getPrismaClient().wallet.findFirst({ where: { name: wallet.name, accountId } });
    if (getWalletByName) throw new ApiError(`Wallet with name=${wallet.name} already exist`, 400);
    return await getPrismaClient().wallet.create({ data: WalletMapper.create(accountId, wallet) });
  }
  static async update(accountId: string, wallet: UpdateWallet) {
    const getWalletById = await getPrismaClient().wallet.findFirst({ where: { id: wallet.id, accountId } });
    if (!getWalletById) throw new ApiError(`Wallet with id=${wallet.id} not found`, 404);
    return await getPrismaClient().wallet.update({ data: { ...wallet }, where: { id: wallet.id, accountId } });
  }

  static async getOneById(accountId: string, id: string) {
    const getWalletById = await getPrismaClient().wallet.findFirst({ where: { id, accountId } });
    if (!getWalletById) throw new ApiError(`Wallet with id=${id} not found`, 404);
    return getWalletById;
  }
  static async getAll(accountId: string, query: ListFilters) {
    const { page, pageSize } = query;

    return await getPrismaClient().wallet.findMany({
      take: pageSize,
      skip: pageSize * (page - 1),
      where: { accountId },
    });
  }
}
