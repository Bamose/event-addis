import { z } from 'zod';

export const eventSchema = z.object({
    id: z.string(),
    userId: z.string(),
    eventName: z.string().trim().min(3).max(100),
    description: z.object({}).nullable().optional(),
    summary: z.string(),
    date: z.date(),
    time: z.string(),
    image: z.string(),
    location: z.string(),
    organisedBy: z.string(),
});
export const newEventSchema = z.object({
    eventName: z.string().trim().min(3).max(100),
    description: z.object({}).nullable().optional(),
    summary: z.string(),
    date: z.date(),
    time: z.string(),
    image: z.string(),
    location: z.string(),
    organisedBy: z.string(),
  })

export type Event= z.infer<typeof eventSchema>;
export type NewEvent = z.infer<typeof newEventSchema>;

