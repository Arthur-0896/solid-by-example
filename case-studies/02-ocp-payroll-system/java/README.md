# Java Implementation

## Prerequisites

- Java Development Kit (JDK) 21 or higher
- Command-line access (Terminal, PowerShell, etc.)

## Project Structure

- `src/bad/SalaryCalculator.java`: Example that violates the Open-Closed Principle (OCP)
- `src/good/SalaryCalculator.java` and related classes: Example that follows OCP using inheritance and polymorphism

## How to Compile and Run
If you're using VSCode and have the Java extension, just open the good or bad SalaryCalculator.java and click 'run' above the main method. Other IDEs will have different processes. If you want to use the command line, do the following:

### 1. Compile the Code

Navigate to the `java` directory:

```bash
cd case-studies/02-ocp-payroll-system/java
```

Create a build directory (if it doesn't exist):

```bash
mkdir build
```

Compile all Java files to the build directory:

```bash
javac -d build src/bad/SalaryCalculator.java src/good/SalaryCalculator.java
```

### 2. Run the "Bad" Version

This version violates OCP by using conditional logic for all employee types.

```bash
java -cp build bad.SalaryCalculator
```

### 3. Run the "Good" Version

This version follows OCP by using inheritance and polymorphism.

```bash
java -cp build good.SalaryCalculator
```

## Notes

- Ensure you are using JDK 21 or higher for compatibility.
- No external libraries are required; only standard Java is used.
- Output will be printed to the console, demonstrating the difference in design approaches.

---

For more information on the Open-Closed Principle and SOLID, see the project documentation or comments in the source files.