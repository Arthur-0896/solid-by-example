// typescript/src/bad/index.ts

type EmployeeType = "fulltime" | "contractor" | "intern";

class Employee {
   constructor(
      public name: string,
      public type: EmployeeType,
      public hourlyRate: number,
      public hoursWorked: number
   ) {}
}

class SalaryCalculator {
   calculateSalary(employee: Employee): number {
      if (employee.type === "fulltime") {
         // Regular hourly rate + 20% bonus
         return employee.hourlyRate * employee.hoursWorked * 1.2;
      } else if (employee.type === "contractor") {
         // Flat hourly rate, no bonus
         return employee.hourlyRate * employee.hoursWorked;
      } else if (employee.type === "intern") {
         // Hourly rate but capped at 80%
         return employee.hourlyRate * employee.hoursWorked * 0.8;
      }
      return 0;
   }
}

// Usage
const employees = [
   new Employee("Alice", "fulltime", 50, 160),
   new Employee("Bob", "contractor", 60, 100),
   new Employee("Charlie", "intern", 20, 80),
];

const calculator = new SalaryCalculator();

employees.forEach((emp) => {
   console.log(
      `${emp.name} (${emp.type}): $${calculator.calculateSalary(emp)}`
   );
});
