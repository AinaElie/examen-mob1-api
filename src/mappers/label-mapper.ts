import { Label as RestLabel } from "@clients";
import { Label as PrismaLabel } from "@prisma/client";

export class LabelMapper {
  public static toRest(label: PrismaLabel) {
    const mapped: RestLabel = {
      id: label.id,
      name: label.name,
    };
    return mapped;
  }
}
