class Keyboard {
  keyPressed: Array<string>;

  constructor() {
    this.keyPressed = [];

    document.addEventListener("keydown", this.keyDownEvent.bind(this));
    document.addEventListener("keyup", this.keyUpEvent.bind(this));
  }

  isDown(key: string) {
    return this.keyPressed.indexOf(key) !== -1;
  }

  keyDownEvent(evt: KeyboardEvent) {
    if (this.keyPressed.indexOf(evt.key) === -1) {
      this.keyPressed.push(evt.key);
    }
  }

  keyUpEvent(evt: KeyboardEvent) {
    if (this.keyPressed.indexOf(evt.key) !== -1) {
      this.keyPressed = this.keyPressed.filter(key => key !== evt.key);
    }
  }
}

export default Keyboard;
