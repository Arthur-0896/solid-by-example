# SOLID Design Principles by Example 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

**Stop memorizing definitions. Start refactoring real code.**

This repository contains real-world case studies demonstrating how to apply **SOLID principles**. Unlike other tutorials that use abstract "Animal/Dog" examples, we use realistic scenarios (e.g., Payment Gateways, Data Pipelines) to show the actual business value of clean architecture.

## 🌍 A Polyglot Repository

This project is language-agnostic. While the initial case studies are written in **TypeScript**, we welcome contributions in **Go, Java, Rust, C#, Python**, and more.

## 📂 Case Studies

| #      | Principle | Case Study Topic                                                           | Key Takeaway                                                                     |
| ------ | --------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **01** | **SRP**   | [**Keyword Processing Pipeline**](./case-studies/01-srp-keyword-processor) | Breaking a monolithic "God Handler" into Service, Parser, and Repository layers. |
| **02** | **OCP**   | [**Payroll System**](./case-studies/02-ocp-payroll-system)                 | How to add features without modifying existing code.                             |
| **03** | **LSP**   | [**Event Ticketing System**](./case-studies/03-lsp-event-system)           | Subtyping without breaking the system.                                           |
| **04** | **ISP**   | [**Media Player**](./case-studies/04-isp-media-player)                     | Keeping interfaces small and client-specific.                                    |
| **05** | **DIP**   | [**Order Processor**](./case-studies/05-dip-order-processor)               | Decoupling high-level logic from low-level details.                              |

## 🛠 How to Use This Repo

1. **Choose a Case Study:** Navigate to the `case-studies` folder (e.g., `case-studies/01-srp-keyword-processor`).
2. **Read the Concept:** The local `README.md` explains the problem and the solution conceptually.
3. **Select Your Language:** Go into the language folder of your choice (e.g., `typescript/`).
4. **Compare:** Look at the `bad/` folder (the mess) and the `good/` folder (the fix).

## 🤝 Contributing

Want to add a solution in **Go, Rust, or Java**? We would love that!

-  **Found a bug?** [Open an Issue](https://github.com/MehediMubin/solid-by-example/issues/new).
-  **Ready to code?** Read [**CONTRIBUTING.md**](./CONTRIBUTING.md) to ensure your code matches our structure.

## ⭐ Support

If this repository helped you understand SOLID better, please give it a **Star**! It helps others find these resources.
