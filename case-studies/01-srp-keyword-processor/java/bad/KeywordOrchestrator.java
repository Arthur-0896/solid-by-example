package bad;

import java.util.List;
import java.util.Objects;

/**
 * This class is an example of violation of the Single-Responsibility principle
 * of the SOLID principles suite
 * 
 * @author Arthur Tristram, Software Engineer (Java)
 * @since 2025-12-18
 */
public class KeywordOrchestrator {

    private static final String FILE_PATH = "keywords.csv";

    /**
     * @param filePath path of the file to be read
     * @return void
     * @implNote performs all actions in a single method (Violates SR)
     */
    public void processKeywords(String filePath) {
        System.out.printf("Opening file at %s...%n", filePath);
        // 1. Reading File Logic (Mixed responsibility)

        List<String> rawData = List.of("buy shoes", "", "best running shoes", "shoes");

        for (String row : rawData) {
            // 2. Validation Logic (Mixed responsibility)
            if (Objects.isNull(row) || row.isBlank()) {
                continue;
            }

            // 3. API Logic (Mixed responsibility)
            System.out.printf("Checking API for: %s%n", row);
            double volume = Math.floor(Math.random() * 1000); // Fake API call

            // 4. Database Logic (Mixed responsibility)
            System.out.printf("INSERT INTO keyword_stats (term, volume) VALUES('%s', %.0f)%n", row, volume);
        }
    }
    // Usage
    /**
     * @param args any command line parameters that may be passed
     * @return void
     * @implNote calls the monolithic processKeywords() function
     */
    public static void main(String[] args) {
        KeywordOrchestrator keywordOrchestrator = new KeywordOrchestrator();
        keywordOrchestrator.processKeywords(FILE_PATH);
    }
}
