package good;
import java.util.List;

import good.services.CsvFileParser;
import good.services.KeywordValidator;
import good.services.SearchVolumeService;
import good.services.StatsRepository;

/**
 * @author Arthur Tristram, Software Engineer (Java)
 * @since 2025-12-18
 * @implNote This class calls Single Responsibility services as advised by SOLID
 *           principles(mimics microservices)
 */
public class KeywordOrchestrator {
    private CsvFileParser parser;
    private KeywordValidator validator;
    private SearchVolumeService api;
    private StatsRepository repo;

    private static final String FILE_PATH = "data.csv";

    public KeywordOrchestrator(CsvFileParser parser, KeywordValidator validator, SearchVolumeService api,
            StatsRepository repo) {
        this.parser = parser;
        this.validator = validator;
        this.api = api;
        this.repo = repo;
    }

    /**
     * @param filePath
     * @implNote The run service that calls various microservices to execute business logic
     */
    public void run(String filePath) {
        List<String> keywords = parser.read(filePath);

        for (String keyword : keywords) {
            if (!validator.isValid(keyword))
                continue;

            double volume = api.getVolume(keyword);
            repo.save(new KeywordStats(keyword, volume));
        }
    }

    /**
     * @param args any arguments passed into the command line
     * @implNote Instantiates the class with the various services and calls the run() service
     */
    public static void main(String[] args) {
        KeywordOrchestrator keywordOrchestrator = new KeywordOrchestrator(new CsvFileParser(), new KeywordValidator(),
                new SearchVolumeService(), new StatsRepository());

        keywordOrchestrator.run(FILE_PATH);
    }
}
