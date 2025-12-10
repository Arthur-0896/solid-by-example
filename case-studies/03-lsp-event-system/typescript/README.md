# TypeScript Implementation

## Prerequisites

-  Node.js (v18 or higher)
-  npm

## Setup

1. Navigate to this directory:
   ```bash
   cd case-studies/03-lsp-event-system/typescript
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## How to Run

### The "Bad" Version

This version violates the Liskov Substitution Principle. It will likely crash or behave unexpectedly.

```bash
npm run start:bad
```

### The "Good" Version

This version adheres to the Liskov Substitution Principle.

```bash
npm run start:good
```
