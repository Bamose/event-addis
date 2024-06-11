import { z } from 'zod';

export const newTicketSchema = z.object({
    eventid: z.string(),
    salesenddate: z.date(),
    salesstartdate: z.date(),
    salesendtime: z.string(),
    salesstarttime: z.string(),
    fullname: z.string(),
    quantity:  z.string(),
    price:  z.string(),
    tickettype: z.string(),
  })

export type NewTicket = z.infer<typeof newTicketSchema>;

