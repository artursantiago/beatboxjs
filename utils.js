class Beat {

  constructor(audioPath) {
    this.audio = new Audio(audioPath);
  }

  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}

class Button {

  constructor (color, key) {
    this.color = color;
    this.key = key;
    this.element = document.body.querySelector(`#${this.key}`);
    this.setButtonColorInHTML();
    this.createTransitionEndListener();
  }

  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  }

  select = () => {
    this.element.style.background = this.color;
    this.element.style.boxShadow = `0rem 0rem 1.5rem ${this.color}`;
  }

  deselect = () => {
    this.element.style.background = 'unset';
    this.element.style.boxShadow = 'unset';
  }

  createTransitionEndListener = () => {
    this.element.addEventListener('transitionend', () => {
      this.deselect();
    })
  }

}