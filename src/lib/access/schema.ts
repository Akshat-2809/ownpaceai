import { z } from "zod";

export const ROLES = ["Learner", "Parent", "Educator", "Investor"] as const;

export const accessSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Please enter your email.")
    .max(254, "That email is too long.")
    .pipe(z.email("Please enter a valid email address.")),
  role: z.enum(ROLES, "Please choose who you are."),
});
