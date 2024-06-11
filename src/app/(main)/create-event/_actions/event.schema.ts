import { z } from 'zod';

export const eventSchema = z.object({
    id: z.string(),
    userid: z.string(),
    eventname: z.string().trim().min(3).max(100),
    description: z.object({}).nullable().optional(),
    summary: z.string(),
    date: z.date(),
    time: z.string(),
    image: z.string(),
    location: z.string(),
    tickettype:z.string(),
    organisedby: z.string(),
});
export const newEventSchema = z.object({
    eventname: z.string().trim().min(3).max(100),
    description: z.object({}).nullable().optional(),
    summary: z.string(),
    date: z.date(),
    time: z.string(),
    image: z.string(),  
    location: z.string(),
    organisedby: z.string(),
  })
  export const registerSchema = z.object({
    fullname: z.string(),
    eventid: z.string(),
  })

export type Event= z.infer<typeof eventSchema>;
export type NewEvent = z.infer<typeof newEventSchema>;
export type Register= z.infer<typeof registerSchema>;
