let beats = {
  "a": {
    beat: new Beat("./assets/Piano Chord 331.mp3"),
    button: new Button('#00fffe', 'a')
  },
  "s": {
      beat: new Beat("./assets/Piano Chord 209.mp3"),
      button: new Button('#00fffe', 's')
  },
  "d": {
      beat: new Beat("./assets/Piano Chord 208.mp3"),
      button: new Button('#00fffe', 'd')
  },
  "f": {
      beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
      button: new Button('#FF00FF', 'f')
  },
  "g": {
      beat: new Beat("./assets/Drum Snare Roll.mp3"),
      button: new Button('#FF00FF', 'g')
  },
  "h": {
      beat: new Beat("./assets/PREL Musical 57.mp3"),
      button: new Button('#FF00FF', 'h')
  },
  "j": {
      beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
      button: new Button('#FF00FF', 'j')
  },
  "k": {
      beat: new Beat("./assets/Musical Compos 33.mp3"),
      button: new Button('#FFFFFF', 'k')
  },
  "l": {
      beat: new Beat("./assets/Musical Orches 4.mp3"),
      button: new Button('#FFFFFF', 'l')
  }
}

triggerBeat = (event) => {
  if (beats[event.key]) {
    let keyPress = beats[event.key];
    keyPress.beat.play();
    keyPress.button.select();
  }
}

document.addEventListener('keydown', triggerBeat)