/**
 * DIP Violation: High-level modules depend on low-level modules.
 *
 * Here, `OrderService` (High-level) is tightly coupled to `StripePaymentProcessor`
 * and `EmailNotifier` (Low-level).
 */

class StripePaymentProcessor {
   processPayment(amount: number): void {
      console.log(`Charging $${amount} using Stripe...`);
   }
}

class EmailNotifier {
   sendEmail(email: string, message: string): void {
      console.log(`Sending email to ${email}: ${message}`);
   }
}

class OrderService {
   private paymentProcessor: StripePaymentProcessor;
   private notifier: EmailNotifier;

   constructor() {
      // VIOLATION: Direct dependency on concrete classes
      this.paymentProcessor = new StripePaymentProcessor();
      this.notifier = new EmailNotifier();
   }

   placeOrder(customerEmail: string, amount: number): void {
      this.paymentProcessor.processPayment(amount);
      this.notifier.sendEmail(
         customerEmail,
         "Your order has been placed successfully!"
      );
      console.log("Order placed.");
   }
}

// Client Code
function runBadExample() {
   console.log("--- BAD: Dependency Inversion Principle Violation ---\n");

   const orderService = new OrderService();
   orderService.placeOrder("customer@example.com", 99.99);
}

runBadExample();
