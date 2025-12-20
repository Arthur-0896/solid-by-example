package good;

import java.util.List;

/**
 * @author Arthur Tristram, Software Engineer(Java)
 * @since 2025-12-19
 * @implNote This module demonstrates the practice of the Open-Closed principle
 *           which states that classes must be open for extension but closed for
 *           modification. By making employee abstract, we can add more specific
 *           use cases by simply using inheritence
 */

abstract class Employee {
    String name;

    abstract double calculateSalary();
}

class FullTimeEmployee extends Employee {

    double hourlyRate;
    double hoursWorked;

    FullTimeEmployee(String name, double hourlyRate, double hoursWorked) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    @Override
    double calculateSalary() {
        // Regular hourly rate + 20% bonus
        return this.hourlyRate * this.hoursWorked * 1.2;
    }
}

class Contractor extends Employee {

    double hourlyRate;
    double hoursWorked;

    Contractor(String name, double hourlyRate, double hoursWorked) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    @Override
    double calculateSalary() {
        // Flat hourly rate, no bonus
        return this.hourlyRate * this.hoursWorked;
    }
}

class Intern extends Employee {

    double hourlyRate;
    double hoursWorked;

    Intern(String name, double hourlyRate, double hoursWorked) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    @Override
    double calculateSalary() {
        // Hourly rate but capped at 80%
        return this.hourlyRate * this.hoursWorked * 0.8;
    }
}

// --- EXTENSION ---
// If we want to add a "Freelancer", we just create a new class.
// We DO NOT touch the existing classes or the calculator.
class Freelancer extends Employee {

    double fixedProjectFee;

    Freelancer(String name, double fixedProjectFee) {
        this.name = name;
        this.fixedProjectFee = fixedProjectFee;
    }

    @Override
    double calculateSalary() {
        return this.fixedProjectFee;
    }
}

public class SalaryCalculator {
    /**
     * @param employees
     * @return double The combined total of all employees' salaries
     */
    public static double calculateTotalSalaries(List<Employee> employees) {
        double total = 0;
        for (Employee emp : employees) {
            double salary = emp.calculateSalary();
            System.out.printf("%s: $%.0f\n", emp.name, salary);
            total += salary;
        }
        return total;
    }

    /**
     * @param args and arguments passed through the command line
     * @return void
     * @implNote Creates a list of employees polymorphically and calculates the
     *           total of their salaries
     */
    public static void main(String[] args) {

        List<Employee> employees = List.of(
                new FullTimeEmployee("Alice", 50, 160),
                new Contractor("Bob", 60, 100),
                new Intern("Charlie", 20, 80),
                new Freelancer("Dave", 5000)); // New type added easily!

        System.out.println("--- Payroll Report ---");
        double total = calculateTotalSalaries(employees);
        System.out.printf("Total Payroll: $%.0f\n", total);
    }
}
