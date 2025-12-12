/**
 * ISP Violation: The "Fat Interface"
 *
 * We have a single interface `MediaPlayer` that defines ALL possible media actions.
 * This forces classes to implement methods they don't actually support.
 */

interface MediaPlayer {
   playAudio(): void;
   playVideo(): void;
   displaySubtitles(): void;
   loadMedia(filename: string): void;
}

class AudioFile implements MediaPlayer {
   private filename: string = "";

   loadMedia(filename: string): void {
      this.filename = filename;
      console.log(`Loading audio file: ${filename}`);
   }

   playAudio(): void {
      if (!this.filename) throw new Error("No file loaded");
      console.log(`Playing audio sequence for ${this.filename} 🎵`);
   }

   // VIOLATION: Audio files don't have video, but must implement this method
   playVideo(): void {
      throw new Error("Method not implemented: Audio files cannot play video.");
   }

   // VIOLATION: Audio files don't have subtitles, but must implement this method
   displaySubtitles(): void {
      throw new Error("Method not implemented: Audio files have no subtitles.");
   }
}

class VideoFile implements MediaPlayer {
   private filename: string = "";

   loadMedia(filename: string): void {
      this.filename = filename;
      console.log(`Loading video file: ${filename}`);
   }

   // Video files might have audio tracks, but let's assume playVideo handles it all for this simple example,
   // or that this method is specifically for audio-only mode.
   playAudio(): void {
      console.log(`Playing audio track of video ${this.filename}`);
   }

   playVideo(): void {
      if (!this.filename) throw new Error("No file loaded");
      console.log(`Displaying video frames for ${this.filename} 🎬`);
   }

   displaySubtitles(): void {
      console.log(`Displaying subtitles for ${this.filename} 💬`);
   }
}

// Client Code
function runBadExample() {
   console.log("--- BAD: Interface Segregation Principle Violation ---\n");

   const song = new AudioFile();
   song.loadMedia("song.mp3");
   song.playAudio();

   try {
      console.log("Attempting to play video on audio file...");
      song.playVideo(); // Crashes or throws error
   } catch (e: any) {
      console.error(`Error: ${e.message}`);
   }

   console.log("\n---------------------------------------------------\n");

   const movie = new VideoFile();
   movie.loadMedia("movie.mp4");
   movie.playVideo();
   movie.displaySubtitles();
}

runBadExample();
