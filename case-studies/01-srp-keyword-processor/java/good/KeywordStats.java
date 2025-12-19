/**
 * @author Arthur Tristram, Software Engineer(Java)
 * @since 2025-12-18
 * @implNote Model class for database objects
 */
public class KeywordStats {
    private String term;
    private double volume;

    public KeywordStats(String term, double volume) {
        this.term = term;
        this.volume = volume;
    }

    // Getters & Setters for encapsulation
    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public double getVolume() {
        return volume;
    }

    public void setVolume(double volume) {
        this.volume = volume;
    }

}
