package bad;

import java.util.List;

/**
 * @author Arthur Tristram, Software Engineer(Java)
 * @since 2025-12-19
 * @implNote This module demonstrates violation of the Open-Closed principle
 *           which states that a class must be closed for modification but open
 *           for extension
 */
enum EmployeeType {
    FULL_TIME, CONTRACTOR, INTERN;
}

class Employee {
    String name;
    EmployeeType type;
    double hourlyRate;
    double hoursWorked;

    public Employee(String name, EmployeeType type, double hourlyRate, double hoursWorked) {
        this.name = name;
        this.type = type;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
}

/**
 * The universal class that does everyhting through conditional logic
 * This keeps the class open for modification as a different use case would
 * require yet another conditional check in the same class
 */
public class SalaryCalculator {
    /**
     * @param employee The employee for which salary is to be computed
     * @return double The computed salaary
     */
    public double calculateSalary(Employee employee) {
        if (employee.type.toString().equals("FULL_TIME")) {
            // Regular hourly rate + 20% bonus
            return employee.hourlyRate * employee.hoursWorked * 1.2;
        } else if (employee.type.toString().equals("CONTRACTOR")) {
            // Flat hourly rate, no bonus
            return employee.hourlyRate * employee.hoursWorked;
        } else if (employee.type.toString().equals("INTERN")) {
            // Hourly rate but capped at 80%
            return employee.hourlyRate * employee.hoursWorked * 0.8;
        }
        return 0;
    }

    // Usage
    /**
     * @param args Any command line parameters passed from the command line
     * @return void
     * @implNote Creates a list of employees and calculates the salaries for each of
     *           them
     */
    public static void main(String[] args) {
        List<Employee> Employees = List.of(new Employee("Alice", EmployeeType.FULL_TIME, 50, 160),
                new Employee("Bob", EmployeeType.CONTRACTOR, 60, 100),
                new Employee("Charlie", EmployeeType.INTERN, 20, 80));

        SalaryCalculator calculator = new SalaryCalculator();

        for (Employee emp : Employees) {
            System.out.printf("%s (%s): $%.0f\n", emp.name, emp.type, calculator.calculateSalary(emp));
        }
    }
}