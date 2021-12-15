const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
      this.secondsPassed += 1;
      // eslint-disable-next-line prettier/prettier
      this.output();
    }, 100);
  },

  getTime() {
    this.output();
  },

  stopTimer() {
    clearInterval(this.intervalId);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },

  output() {
    return this.secondsPassed <= 9
      ? console.log(this.minsPassed + ':0' + this.secondsPassed)
      : console.log(this.minsPassed + ':' + this.secondsPassed);
  },
};

// // context definition
// function sum(a, b) {
//   console.log(this);
// }

// test

timer.startTimer();

// stop after 6 sec
setInterval(() => {
  timer.stopTimer();
  timer.getTime();
}, 7100);

// reset after 3 sec
// setInterval(() => {
//   timer.resetTimer();
// }, 6100);

timer.getTime();
