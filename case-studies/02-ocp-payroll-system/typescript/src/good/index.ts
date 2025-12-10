// typescript/src/good/index.ts

interface Employee {
   name: string;
   calculateSalary(): number;
}

class FullTimeEmployee implements Employee {
   constructor(
      public name: string,
      private hourlyRate: number,
      private hoursWorked: number
   ) {}

   calculateSalary(): number {
      // Regular hourly rate + 20% bonus
      return this.hourlyRate * this.hoursWorked * 1.2;
   }
}

class Contractor implements Employee {
   constructor(
      public name: string,
      private hourlyRate: number,
      private hoursWorked: number
   ) {}

   calculateSalary(): number {
      // Flat hourly rate, no bonus
      return this.hourlyRate * this.hoursWorked;
   }
}

class Intern implements Employee {
   constructor(
      public name: string,
      private hourlyRate: number,
      private hoursWorked: number
   ) {}

   calculateSalary(): number {
      // Hourly rate but capped at 80%
      return this.hourlyRate * this.hoursWorked * 0.8;
   }
}

// --- EXTENSION ---
// If we want to add a "Freelancer", we just create a new class.
// We DO NOT touch the existing classes or the calculator.
class Freelancer implements Employee {
   constructor(public name: string, private fixedProjectFee: number) {}

   calculateSalary(): number {
      return this.fixedProjectFee;
   }
}

class SalaryCalculator {
   calculateTotalSalaries(employees: Employee[]): number {
      let total = 0;
      for (const emp of employees) {
         const salary = emp.calculateSalary();
         console.log(`${emp.name}: $${salary}`);
         total += salary;
      }
      return total;
   }
}

// Usage
const employees: Employee[] = [
   new FullTimeEmployee("Alice", 50, 160),
   new Contractor("Bob", 60, 100),
   new Intern("Charlie", 20, 80),
   new Freelancer("Dave", 5000), // New type added easily!
];

const calculator = new SalaryCalculator();
console.log("--- Payroll Report ---");
const total = calculator.calculateTotalSalaries(employees);
console.log(`Total Payroll: $${total}`);
