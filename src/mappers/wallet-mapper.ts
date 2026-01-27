import { Wallet as RestWallet, WalletTypeEnum } from "@clients";
import { Wallet as PrismaWallet } from "@prisma/client";

export class WalletMapper {
  public static toRest(wallet: PrismaWallet) {
    const mapped: RestWallet = {
      id: wallet.id,
      name: wallet.name,
      amount: wallet.amount,
      isActive: wallet.isActive,
      accountId: wallet.accountId,
      description: wallet.description,
      type: wallet.type as WalletTypeEnum,
    };
    return mapped;
  }

  public static toDomain(wallet: RestWallet): PrismaWallet {
    const mapped = {
      accountId: wallet.accountId || "",
      amount: wallet.amount || 0,
      description: wallet.description || "",
      id: wallet.id || "",
      name: wallet.name || "",
      isActive: !!wallet.isActive,
      type: wallet.type || "",
    };
    return mapped as PrismaWallet;
  }
}
