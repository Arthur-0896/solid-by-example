# Java Implementation: SRP Keyword Processor

## Prerequisites

- Java Development Kit (JDK) 21 or higher
- Command-line access (Terminal, PowerShell, etc.)

## Project Structure

- `bad/KeywordOrchestrator.java`: Example that violates the Single Responsibility Principle (SRP)
- `good/KeywordOrchestrator.java` and related classes: Example that follows SRP using separate service classes

## How to Compile and Run

### 1. Compile the Code

Navigate to the `java` directory:

```bash
cd case-studies/01-srp-keyword-processor/java
```

Compile all Java files (recommended):

```bash
javac bad/*.java good/*.java
```

### 2. Run the "Bad" Version

This version violates SRP by combining all logic in one class.

```bash
java bad.KeywordOrchestrator
```

### 3. Run the "Good" Version

This version follows SRP by delegating responsibilities to separate classes.

```bash
java good.KeywordOrchestrator
```

## Notes

- Ensure you are using JDK 21 or higher for compatibility.
- No external libraries are required; only standard Java is used.
- Output will be printed to the console, demonstrating the difference in design approaches.

---

For more information on the Single Responsibility Principle and SOLID, see the project documentation or comments in the source files.