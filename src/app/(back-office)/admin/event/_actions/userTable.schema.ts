import { z } from "zod";

export const userEventSchema = z.object({
  id: z.string(),
  eventname: z.string().trim().min(3).max(100),
  fullname: z.string(),
  email: z.string(),
  active: z.boolean(),
  location: z.string(),
  createdat: z.string(),
});

export type UserEvent = z.infer<typeof userEventSchema>;
