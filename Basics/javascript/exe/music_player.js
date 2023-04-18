// music player

// Create a class MusicPlayer that has the following properties: playlist<arraylist>, volume as default 0, isPlaying as default false, currentTrack as default 0

// Create the following methods:
// play() - sets isPlaying to true
// pause() - sets isPlaying to false
// next() - sets currentTrack to the next track
// previous() - sets currentTrack to the previous track
// setVolume(volume) - sets the volume to the given value
// status() - displays the current track, volume and isPlaying in the console
// Create a new instance of MusicPlayer and test the methods
// Expected output:
// Current track: song1, volume: 0, is playing: true
// Current track: song2, volume: 0, is playing: true
// Current track: song2, volume: 10, is playing: false
// const musicPlayer = new MusicPlayer(['song1','song2'], 50);

class MusicPlayer {
    constructor(arrayList) {
        this.playlist = arrayList
        this.isPlaying = false;
        this.volume = 0
        this.currentTrack = 0;
    }
    play() {
        console.log("The Music are Playing !");
        return this.isPlaying = true
    }
    pause() {
        console.log("The Music are in Pause !");
        return this.isPlaying = false
    }
    setVolume(val) {
        console.log("Current volume");
        return this.volume = val
    }
    next() {
        console.log("Next track =>");
        if (this.currentTrack >= this.playlist.length-1) {
            console.log("This is last song in your playlist")
        } else {
            this.currentTrack++
        }
    }
    previous() {
        console.log("Previous track <=");
        if(this.currentTrack > 0) {
            this.currentTrack--
        } else {
            console.log("You can't go negative number", this.currentTrack);
        }
    }
    status() {
        const obj = {
            Volume: this.volume,
            IsPlaying: this.isPlaying,
            Track: this.playlist[this.currentTrack]
        }
        const {Volume, IsPlaying, Track} = obj
        console.log(`\n---MUSIC PLAYER---\n  Track: ${Track}\n  IsPlaying: ${IsPlaying}\n  SoundVol: ${Volume}\n------------------\n`)
        return obj
    }
}

let myMusicList = [
    "song1",
    "song2",
    "song3",
    "song4",
    "song5",
    "song6",
    "song7",
    "song8",
    "song9",
    "song10"
]

let myMp3 = new MusicPlayer(myMusicList)
myMp3.play()
myMp3.next()
myMp3.next()
myMp3.previous()
myMp3.setVolume(74)
myMp3.next()
myMp3.next()
myMp3.next()
myMp3.next()
myMp3.next()
myMp3.next()
myMp3.next()
myMp3.next()
myMp3.next()
myMp3.next()
myMp3.next()
myMp3.previous()
myMp3.previous()
myMp3.previous()
myMp3.previous()
myMp3.previous()
myMp3.previous()
myMp3.previous()
myMp3.previous()
myMp3.previous()
myMp3.previous()
myMp3.previous()
console.log(myMp3.status());

/* let myMp4 = new MusicPlayer(myMusicList)
myMp4.play()
console.log(myMp4.status());

let myMp5 = new MusicPlayer(myMusicList)
myMp5.play()
myMp5.next()
console.log(myMp5.status());

let myIpod = new MusicPlayer(myMusicList)
myIpod.next()
myIpod.setVolume(10)
console.log(myIpod.status()); */