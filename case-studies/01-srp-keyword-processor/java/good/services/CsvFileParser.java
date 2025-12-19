import java.util.List;

/**
 * @author Arthur Tristram, Software Engineer(Java)
 * @since 2025-12-18
 * @implNote This class handles the responsibility of reading the file
 */
public class CsvFileParser {
    /**
     * @param fileName name of the file to be parsed
     * @return a list containing file records
     */
    public List<String> read(String fileName) {
        System.out.printf("Reading file: %s\n", fileName);
        return List.of("buy shoes", "", "best running shoes", "shoes");
    }
}
