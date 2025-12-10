// typescript/src/bad/index.ts

class EventTicket {
   constructor(public eventName: string, public price: number) {}

   generateTicket() {
      console.log(`[Ticket] Generated for ${this.eventName}`);
   }

   processPayment() {
      console.log(
         `[Payment] Processing $${this.price} for ${this.eventName}...`
      );
   }
}

class FreeTicket extends EventTicket {
   constructor(eventName: string) {
      super(eventName, 0);
   }

   // ❌ VIOLATION: This subclass cannot handle this method!
   // It breaks the contract established by the parent.
   processPayment() {
      throw new Error("Cannot process payment for free tickets!");
   }
}

// --- USAGE ---

function batchProcessTickets(tickets: EventTicket[]) {
   for (const ticket of tickets) {
      try {
         ticket.generateTicket();
         // The system assumes ALL tickets can be paid for.
         ticket.processPayment();
         console.log("---");
      } catch (error: any) {
         console.error(
            `[ERROR] Failed to process ${ticket.eventName}: ${error.message}`
         );
      }
   }
}

const tickets = [
   new EventTicket("Taylor Swift Concert", 200),
   new EventTicket("Tech Conference", 500),
   new FreeTicket("Community Meetup"), // This will cause issues
];

console.log("Starting Batch Process...");
batchProcessTickets(tickets);
