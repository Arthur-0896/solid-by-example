import { KeywordStats } from "../types";

export class StatsRepository {
   save(stats: KeywordStats): void {
      console.log(`[DB] Saving: ${stats.term} -> ${stats.volume}`);
   }
}
