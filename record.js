var mic, recorder, soundFile;

var state = -1 ;

function setup() {
  // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();
}

function record(){
    if (state === -1 ) {
        document.getElementById("Record").innerHTML = "Record";
        state++
    } else if (state === 0) {
        mic.start();
        recorder.record(soundFile);
        document.getElementById("Record").innerHTML = "Stop";
        document.getElementById("Record").setAttribute("class", "flashing");
        state ++;
    } else if (state === 1) {
        recorder.stop();
        mic.stop()
        document.getElementById("Record").innerHTML = "Play";
        document.getElementById("Record").setAttribute("class", "none");
        state ++;
    } else if (state === 2) {
        soundFile.play();
        document.getElementById("Record").innerHTML = "Record";
        state = 0;
    }

}
