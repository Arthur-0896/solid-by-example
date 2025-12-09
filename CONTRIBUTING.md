# Contributing to SOLID by Example

👋 **Welcome!** First off, thank you for considering contributing to **SOLID by Example**.

Our goal is to build the "Rosetta Stone" of clean code—a place where developers can see the same SOLID patterns applied across different languages, side-by-side. Whether you're a seasoned architect or just starting out, your contributions help make software design accessible to everyone.

To ensure consistency and quality across all language implementations, please review the following guidelines.

## 📚 Table of Contents

-  [🚀 How to Add a New Language Implementation](#how-to-add-a-new-language-implementation)
   -  [1. Directory Structure](#1-directory-structure)
   -  [2. The Golden Rule: Contrast is Key](#2-the-golden-rule-contrast-is-key)
   -  [3. Documentation Requirements](#3-documentation-requirements)
   -  [4. Core Philosophy](#4-core-philosophy)
-  [🐛 Reporting Issues](#reporting-issues)
-  [📥 Pull Request Process](#pull-request-process)
-  [🤝 Code of Conduct](#code-of-conduct)

---

## <a id="how-to-add-a-new-language-implementation"></a>🚀 How to Add a New Language Implementation

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

Your submission **MUST** contain two distinct implementations. The value of this repo comes from the _diff_ between the two.

-  ❌ **`bad/`**: Code that works but clearly violates the specific SOLID principle.
   -  It should resemble "naive" production code (monolithic, tightly coupled, hard to test).
   -  _Crucial:_ It must still compile and run!
-  ✅ **`good/`**: The refactored version demonstrating the principle correctly.
   -  This should be the "clean" version of the exact same logic found in `bad/`.

### 3. Documentation Requirements

Inside your language folder, you must include a `README.md`. Please copy the format below:

````markdown
# [Language] Implementation

## Prerequisites

-  List tools needed (e.g., JDK 17, Go 1.21, Cargo).

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
````

> **Note:** Unit tests are highly encouraged, especially for the "Good" version, to prove that refactoring didn't break behavior.

### 4. Core Philosophy

-  **Keep it Simple**: Avoid heavy frameworks if possible. Standard libraries are preferred so the code remains focused on the design pattern, not framework syntax.
-  **Runnable Code**: We want users to clone and run. Ensure your instructions work.
-  **Educational Comments**: Use comments to explain _why_ a change was made in the `good` version. Treat the code as a tutorial.

## <a id="reporting-issues"></a>🐛 Reporting Issues

Found a bug? Want to request a new case study?

We use a structured **Issue Form** to ensure we have all the details needed to help you. When you [open a new issue](https://github.com/MehediMubin/solid-by-example/issues/new), you'll be guided to provide:

-  A clear description
-  Steps to reproduce (for bugs)
-  Current vs. Expected behavior

Please fill out these fields as best as you can!

## <a id="pull-request-process"></a>📥 Pull Request Process

1. **Fork** the repository and create your branch from `main`.
2. **Implement** your changes following the structure above.
3. **Verify** that your code lints and runs locally.
4. **Submit** that Pull Request!
   -  Please provide a clear description of what you added.
   -  Link to the issue if you are solving one.

## <a id="code-of-conduct"></a>🤝 Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

---

We look forward to your PR! Happy coding! 💻
