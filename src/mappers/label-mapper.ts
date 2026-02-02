import { GetAllLabels200Response, Label as RestLabel } from "@clients";
import { Label as PrismaLabel } from "@prisma/client";

import { PrismaPaginationInfo } from "@/types";
import { calculatePagination } from "@/utilities";

export class LabelMapper {
  public static toRest(label: PrismaLabel) {
    const mapped: RestLabel = {
      id: label.id,
      name: label.name,
    };
    return mapped;
  }

  public static toListResponse(labels: PrismaLabel[], prismaPaginationInfo: PrismaPaginationInfo) {
    const mapped = labels.map(this.toRest.bind(this));

    const listResponse: GetAllLabels200Response = {
      pagination: calculatePagination(prismaPaginationInfo),
      values: mapped,
    };

    return listResponse;
  }
}
