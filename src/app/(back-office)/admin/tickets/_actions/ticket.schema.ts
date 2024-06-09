import { z } from 'zod';

export const newTicketSchema = z.object({
    eventId: z.string(),
    salesEndDate: z.date(),
    salesStartDate: z.date(),
    salesEndTime: z.string(),
    salesStartTime: z.string(),
    fullName: z.string(),
    quantity:  z.string(),
    price:  z.string(),
    ticketType: z.string(),
  })

export type NewTicket = z.infer<typeof newTicketSchema>;

