import { Label } from "@prisma/client";
import z from "zod";

import { ApiError } from "@/errors";

const createTransactionSchema = z.object({
  date: z.refine((value) => new Date(value as string).toString() !== "Invalid Date", "Date invalidate"),
  labels: [],
});

export class LabelValidator {
  public static create(createLabel: z.infer<typeof createTransactionSchema>) {
    const result = createTransactionSchema.safeParse(createLabel);
    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }

  public static update(accountId: string, createLabel: Label) {
    if (createLabel.accountId !== accountId) throw new ApiError("Your account is not able to make change on this element", 403);
    const result = createTransactionSchema.safeParse(createLabel);

    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }
}
