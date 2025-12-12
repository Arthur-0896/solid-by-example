/**
 * ISP Adherence: Segregated Interfaces
 *
 * Instead of one fat interface, we break it down into smaller, specific interfaces.
 * Classes only implement the interfaces relevant to them.
 */

// 1. Define small, focused interfaces
interface Loadable {
   loadMedia(filename: string): void;
}

interface AudioPlayable {
   playAudio(): void;
}

interface VideoPlayable {
   playVideo(): void;
}

interface SubtitleSupport {
   displaySubtitles(): void;
}

// 2. Implement only what is needed

class AudioFile implements Loadable, AudioPlayable {
   private filename: string = "";

   loadMedia(filename: string): void {
      this.filename = filename;
      console.log(`Loading audio file: ${filename}`);
   }

   playAudio(): void {
      if (!this.filename) throw new Error("No file loaded");
      console.log(`Playing audio sequence for ${this.filename} 🎵`);
   }
}

class VideoFile implements Loadable, VideoPlayable, SubtitleSupport {
   private filename: string = "";

   loadMedia(filename: string): void {
      this.filename = filename;
      console.log(`Loading video file: ${filename}`);
   }

   playVideo(): void {
      if (!this.filename) throw new Error("No file loaded");
      console.log(`Displaying video frames for ${this.filename} 🎬`);
   }

   displaySubtitles(): void {
      console.log(`Displaying subtitles for ${this.filename} 💬`);
   }
}

// 3. Client code depends on specific interfaces, not concrete classes where possible

function playMusic(player: AudioPlayable) {
   player.playAudio();
}

function watchMovie(player: VideoPlayable & SubtitleSupport) {
   player.playVideo();
   player.displaySubtitles();
}

// Client Code
function runGoodExample() {
   console.log("--- GOOD: Interface Segregation Principle Adherence ---\n");

   const song = new AudioFile();
   song.loadMedia("song.mp3");

   // song.playVideo(); // TypeScript Error: Property 'playVideo' does not exist on type 'AudioFile'.

   playMusic(song); // Works perfectly

   console.log("\n---------------------------------------------------\n");

   const movie = new VideoFile();
   movie.loadMedia("movie.mp4");

   watchMovie(movie); // Works perfectly
}

runGoodExample();
