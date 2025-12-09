# Case Study 01: The Keyword Processor
**Principle:** Single Responsibility Principle (SRP)

## The Scenario
We need a system to process a list of SEO keywords uploaded via a CSV file.
The current requirements are:
1. Read a CSV file containing keywords.
2. Validate and filter out invalid keywords (e.g., empty strings).
3. Check the "search volume" for each keyword using an external API.
4. Save the results to a database.

## The Problem (Bad Code)
The current implementation creates a single class `KeywordProcessor` that does everything:
- It handles File I/O.
- It contains validation logic.
- It makes HTTP requests.
- It connects to the database.

This violates **SRP**. If the CSV format changes, the class changes. If the API changes, the class changes. If the DB changes, the class changes.

## The Challenge
Refactor this monolithic class into a set of small, focused classes that strictly adhere to SRP.

## Question
**What are the classes you might need in this software solution?**