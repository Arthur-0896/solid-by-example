// typescript/bad/index.ts

class KeywordProcessor {
    processKeywords(filePath: string) {
        console.log(`Opening file at ${filePath}...`);
        // 1. Reading File Logic (Mixed responsibility)
        const rawData = ["buy shoes", "", "best running shoes", "shoes"]; 
        
        for (const row of rawData) {
            // 2. Validation Logic (Mixed responsibility)
            if (!row || row.length === 0) {
                continue;
            }

            // 3. API Logic (Mixed responsibility)
            console.log(`Checking API for: ${row}`);
            const volume = Math.floor(Math.random() * 1000); // Fake API call

            // 4. Database Logic (Mixed responsibility)
            console.log(`INSERT INTO keyword_stats (term, volume) VALUES ('${row}', ${volume})`);
        }
    }
}

// Usage
const processor = new KeywordProcessor();
processor.processKeywords("keywords.csv");