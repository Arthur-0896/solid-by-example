// typescript/src/good/index.ts

// 1. Base Class: Contains logic common to ALL tickets
abstract class Ticket {
   constructor(public eventName: string) {}

   generateTicket() {
      console.log(`[Ticket] Generated QR Code for ${this.eventName}`);
   }
}

// 2. Paid Ticket: Adds payment capability
class PaidTicket extends Ticket {
   constructor(eventName: string, public price: number) {
      super(eventName);
   }

   processPayment() {
      console.log(`[Payment] Charged $${this.price} for ${this.eventName}`);
   }
}

// 3. Free Ticket: Just a ticket, no payment logic needed
class FreeTicket extends Ticket {
   constructor(eventName: string) {
      super(eventName);
   }
}

// --- SERVICES ---

class TicketService {
   // Can handle ANY ticket (LSP satisfied for Ticket)
   static generateAll(tickets: Ticket[]) {
      console.log("--- Generating Tickets ---");
      tickets.forEach((t) => t.generateTicket());
   }
}

class PaymentService {
   // Only accepts PaidTicket, enforcing type safety
   static processPayments(tickets: PaidTicket[]) {
      console.log("\n--- Processing Payments ---");
      tickets.forEach((t) => t.processPayment());
   }
}

// --- USAGE ---

const taylorSwift = new PaidTicket("Taylor Swift Concert", 200);
const techConf = new PaidTicket("Tech Conference", 500);
const meetup = new FreeTicket("Community Meetup");

const allTickets: Ticket[] = [taylorSwift, techConf, meetup];
const paidTickets: PaidTicket[] = [taylorSwift, techConf];

// 1. Generate tickets for everyone (Safe)
TicketService.generateAll(allTickets);

// 2. Process payments only for those who need it (Safe)
PaymentService.processPayments(paidTickets);

// Note: We physically cannot pass 'meetup' to processPayments.
// TypeScript would throw a compile-time error.
