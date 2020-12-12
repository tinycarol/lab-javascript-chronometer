class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
    this.millisecondsInterval = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    this.millisecondsInterval = setInterval(() => {
      this.milliseconds += 10;
      callback && callback();
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.milliseconds % 1000;
  }
  twoDigitsNumber(number) {
    return number.toString().padStart(2, "0");
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsInterval);
  }
  resetClick() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}:${this.twoDigitsNumber(Math.floor(this.getMilliseconds() / 10))}`;
  }
}
