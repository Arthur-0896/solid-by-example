export class KeywordValidator {
    isValid(term: string): boolean {
        // Only valid if not empty
        return term.length > 0;
    }
}