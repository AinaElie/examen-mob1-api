import { Label } from "@prisma/client";
import z from "zod";

import { ApiError } from "@/errors";

const createLabelSchema = z.object({
  name: z.string().min(1),
});

export class LabelValidator {
  public static create(createLabel: z.infer<typeof createLabelSchema>) {
    const result = createLabelSchema.safeParse(createLabel);
    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }

  public static update(accountId: string, createLabel: Label) {
    if (createLabel.accountId !== accountId) throw new ApiError("Your account is not able to make change on this element", 403);
    const result = createLabelSchema.safeParse(createLabel);

    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }
}
