# Java Implementation: SRP Keyword Processor

## Prerequisites

- Java Development Kit (JDK) 21 or higher
- Command-line access (Terminal, PowerShell, etc.)

## Project Structure

- `bad/KeywordOrchestrator.java`: Example that violates the Single Responsibility Principle (SRP)
- `good/KeywordOrchestrator.java` and related classes: Example that follows SRP using separate service classes

## How to Compile and Run
If you're using VSCode and have the Java extension, just open good/KeywordOrchestrator.java or bad version and click 'run' that appears above the main method. Other IDEs will have different processes. If you want to use the command line, do the following:

### 1. Compile the Code to a Build Directory

Navigate to the `java` directory:

```bash
cd case-studies/01-srp-keyword-processor/java
```

Create a build directory (if it doesn't exist):

```bash
mkdir build
```

Compile all Java files to the build directory:

```bash
javac -d build bad/*.java good/*.java
```

### 2. Run the "Bad" Version

This version violates SRP by combining all logic in one class.

```bash
java -cp build bad.KeywordOrchestrator
```

### 3. Run the "Good" Version

This version follows SRP by delegating responsibilities to separate classes.

```bash
java -cp build good.KeywordOrchestrator
```

## Notes

- Ensure you are using JDK 21 or higher for compatibility.
- No external libraries are required; only standard Java is used.
- Output will be printed to the console, demonstrating the difference in design approaches.

---

For more information on the Single Responsibility Principle and SOLID, see the project documentation or comments in the source files.