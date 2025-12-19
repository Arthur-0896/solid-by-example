package good.services;	
/**
 * @author Arthur Tristram, Software Engineer(Java)
 * @since 2025-12-18
 * @implNote This class handles the responsibility of validating the file
 */
public class KeywordValidator {
    /**
     * @param term the string to be validated
     * @return boolean true if valid, false if invalid
     */
    public boolean isValid(String term) {
        return !term.isEmpty();
    }
}
