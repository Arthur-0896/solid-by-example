import { SearchVolumeService } from "./services/API.ts";
import { CsvFileParser } from "./services/Parser.ts";
import { StatsRepository } from "./services/Repository.ts";
import { KeywordValidator } from "./services/Validator.ts";

class KeywordOrchestrator {
   private parser: CsvFileParser;
   private validator: KeywordValidator;
   private api: SearchVolumeService;
   private repo: StatsRepository;

   constructor(
      parser: CsvFileParser,
      validator: KeywordValidator,
      api: SearchVolumeService,
      repo: StatsRepository
   ) {
      this.parser = parser;
      this.validator = validator;
      this.api = api;
      this.repo = repo;
   }

   run(filePath: string) {
      const keywords = this.parser.read(filePath);

      for (const keyword of keywords) {
         if (!this.validator.isValid(keyword)) continue;

         const volume = this.api.getVolume(keyword);
         this.repo.save({ term: keyword, volume });
      }
   }
}

// Usage
const app = new KeywordOrchestrator(
   new CsvFileParser(),
   new KeywordValidator(),
   new SearchVolumeService(),
   new StatsRepository()
);

app.run("data.csv");
