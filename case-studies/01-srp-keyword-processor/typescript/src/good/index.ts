import { SearchVolumeService } from "good/services/Api";
import { CsvFileParser } from "./services/Parser";
import { StatsRepository } from "./services/Repository";
import { KeywordValidator } from "./services/Validator";

class KeywordOrchestrator {
   constructor(
      private parser: CsvFileParser,
      private validator: KeywordValidator,
      private api: SearchVolumeService,
      private repo: StatsRepository
   ) {}

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
