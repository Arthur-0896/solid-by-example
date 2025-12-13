/**
 * DIP Adherence: High-level modules depend on abstractions.
 *
 * `OrderService` depends on `PaymentProcessor` and `NotificationService` interfaces.
 * We can inject ANY implementation (Stripe, PayPal, Email, SMS) without changing the service.
 */

// 1. Abstractions (Interfaces)
interface PaymentProcessor {
   processPayment(amount: number): void;
}

interface NotificationService {
   sendNotification(to: string, message: string): void;
}

// 2. Low-Level Modules (Implementations)

class StripePaymentProcessor implements PaymentProcessor {
   processPayment(amount: number): void {
      console.log(`Charging $${amount} using Stripe...`);
   }
}

class PayPalPaymentProcessor implements PaymentProcessor {
   processPayment(amount: number): void {
      console.log(`Charging $${amount} using PayPal...`);
   }
}

class EmailNotifier implements NotificationService {
   sendNotification(to: string, message: string): void {
      console.log(`Sending email to ${to}: ${message}`);
   }
}

class SMSNotifier implements NotificationService {
   sendNotification(to: string, message: string): void {
      console.log(`Sending SMS to ${to}: ${message}`);
   }
}

// 3. High-Level Module (Depends on Abstractions)

class OrderService {
   private paymentProcessor: PaymentProcessor;
   private notifier: NotificationService;

   // Dependency Injection via Constructor
   constructor(
      paymentProcessor: PaymentProcessor,
      notifier: NotificationService
   ) {
      this.paymentProcessor = paymentProcessor;
      this.notifier = notifier;
   }

   placeOrder(customerContact: string, amount: number): void {
      this.paymentProcessor.processPayment(amount);
      this.notifier.sendNotification(
         customerContact,
         "Your order has been placed successfully!"
      );
      console.log("Order placed.");
   }
}

// Client Code
function runGoodExample() {
   console.log("--- GOOD: Dependency Inversion Principle Adherence ---\n");

   // Scenario 1: Stripe + Email
   console.log("Scenario 1: Standard Order");
   const stripeProcessor = new StripePaymentProcessor();
   const emailNotifier = new EmailNotifier();

   const orderService1 = new OrderService(stripeProcessor, emailNotifier);
   orderService1.placeOrder("customer@example.com", 100);

   console.log("\n---------------------------------------------------\n");

   // Scenario 2: PayPal + SMS (Swapping implementations easily)
   console.log("Scenario 2: Mobile Order");
   const payPalProcessor = new PayPalPaymentProcessor();
   const smsNotifier = new SMSNotifier();

   const orderService2 = new OrderService(payPalProcessor, smsNotifier);
   orderService2.placeOrder("+1-555-0199", 50);
}

runGoodExample();
