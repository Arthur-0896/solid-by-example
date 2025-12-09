export class CsvFileParser {
    read(filePath: string): string[] {
        console.log(`Reading file: ${filePath}`);
        return ["buy shoes", "", "best running shoes", "shoes"];
    }
}