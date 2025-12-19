package good.services;

import good.KeywordStats;

/**
 * @author Arthur Tristram, Software Engineer(Java)
 * @since 2025-12-18
 * @implNote This class handles the responsibility of saving object to repository
 */
public class StatsRepository {
    /**
     * @param stats the database object to be saved
     * @return void
     */
    public void save(KeywordStats stats) {
        System.out.printf("[DB] Saving: %s -> %.0f\n", stats.getTerm(), stats.getVolume());
    }
}
