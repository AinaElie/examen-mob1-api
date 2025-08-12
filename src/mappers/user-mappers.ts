import { User as RestUser } from "@clients";
import { Branch, User as DomainUser } from "@prisma/client";

interface UserDomainBranch {
  branch: Branch;
}

type UserDomainBranches = {
  branches: UserDomainBranch[];
};

export class UserMapper {
  static toDomain(id: string, user: RestUser): DomainUser {
    return {
      id,
      accountId: user.account?.id,
      birthDate: user.birthDate,
      cin: user.cin,
      communionId: user?.communion?.id,
      creationDateTime: user.creationDateTime,
      firstName: user.firstName,
      lastName: user.lastName,
      fileId: undefined,
    };
  }
  static toRest(user: DomainUser & UserDomainBranches): RestUser {
    delete user.communionId;
    delete user.accountId;
    delete user.fileId;

    return {
      ...user,
      branches: [...user.branches.map((branch) => branch.branch)],
    };
  }
}
