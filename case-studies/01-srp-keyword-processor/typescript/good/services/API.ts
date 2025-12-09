export class SearchVolumeService {
    getVolume(term: string): number {
        console.log(`[API] Fetching volume for: ${term}`);
        return Math.floor(Math.random() * 1000);
    }
}