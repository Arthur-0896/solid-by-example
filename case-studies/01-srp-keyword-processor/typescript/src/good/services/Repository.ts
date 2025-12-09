import type { KeywordStats } from "../types.ts";

export class StatsRepository {
   save(stats: KeywordStats): void {
      console.log(`[DB] Saving: ${stats.term} -> ${stats.volume}`);
   }
}
