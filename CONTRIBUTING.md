# Contributing to SOLID by Example

👋 **Welcome!** First off, thank you for considering contributing to **SOLID by Example**.

Our goal is to build the "Rosetta Stone" of clean code—a place where developers can see the same SOLID patterns applied across different languages, side-by-side. Whether you're a seasoned architect or just starting out, your contributions help make software design accessible to everyone.

To ensure consistency and quality across all language implementations, please review the following guidelines.

## 📚 Table of Contents

- [How to Add a New Language Implementation](#-how-to-add-a-new-language-implementation)
- [The Golden Rule: Contrast is Key](#-the-golden-rule-contrast-is-key)
- [Directory Structure](#-directory-structure)
- [Documentation Requirements](#-documentation-requirements)
- [Core Philosophy](#-core-philosophy)
- [Pull Request Process](#-pull-request-process)
- [Code of Conduct](#-code-of-conduct)

---

## 🚀 How to Add a New Language Implementation

We love seeing new languages! If you want to solve an existing case study in a new language (e.g., adding a `rust` solution to `01-srp-keyword-processor`), please follow these steps.

### 1. Directory Structure

Navigate to the specific Case Study folder and create a directory for your language. It **must** follow this exact structure to maintain consistency:

```text
01-srp-keyword-processor/
├── typescript/
├── rust/            <-- Your new folder
│   ├── bad/         <-- The code violating the principle
│   ├── good/        <-- The refactored, clean code
│   └── README.md    <-- Instructions for your language
```

### 2. The Golden Rule: Contrast is Key

Your submission **MUST** contain two distinct implementations. The value of this repo comes from the *diff* between the two.

*   ❌ **`bad/`**: Code that works but clearly violates the specific SOLID principle.
    *   It should resemble "naive" production code (monolithic, tightly coupled, hard to test).
    *   *Crucial:* It must still compile and run!
*   ✅ **`good/`**: The refactored version demonstrating the principle correctly.
    *   This should be the "clean" version of the exact same logic found in `bad/`.

### 3. Documentation Requirements

Inside your language folder, you must include a `README.md`. Please copy the format below:

```markdown
# [Language] Implementation

## Prerequisites
- List tools needed (e.g., JDK 17, Go 1.21, Cargo).

## How to Run
### The "Bad" Version
```bash
# command to run bad version
```

### The "Good" Version
```bash
# command to run good version
```

## How to Test
```bash
# command to run tests
```
```

> **Note:** Unit tests are highly encouraged, especially for the "Good" version, to prove that refactoring didn't break behavior.

### 4. Core Philosophy

*   **Keep it Simple**: Avoid heavy frameworks if possible. Standard libraries are preferred so the code remains focused on the design pattern, not framework syntax.
*   **Runnable Code**: We want users to clone and run. Ensure your instructions work.
*   **Educational Comments**: Use comments to explain *why* a change was made in the `good` version. Treat the code as a tutorial.

## 📥 Pull Request Process

1.  **Fork** the repository and create your branch from `main`.
2.  **Implement** your changes following the structure above.
3.  **Verify** that your code lints and runs locally.
4.  **Submit** that Pull Request!
    *   Please provide a clear description of what you added.
    *   Link to the issue if you are solving one.

## 🤝 Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

---

We look forward to your PR! Happy coding! 💻
