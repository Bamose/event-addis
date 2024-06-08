import { z } from 'zod';
export const newUserSchema = z.object({
    userName: z.string().trim().min(3).max(100),
    email: z.string().email().trim().max(50).optional(),
    password: z.string().min(8).max(64),
  })
  .refine((data) => data.email, {
    message: 'email is required',
  });

export const loginSchema = z.object({
  userName: z.string().trim().min(3).max(50),
  password: z.string().min(8).max(64),
});

export type Login = z.infer<typeof loginSchema>;
export type NewUser = z.infer<typeof newUserSchema>;

