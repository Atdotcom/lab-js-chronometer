class Chronometer {
  constructor() {
    // ... your code goes here
   this.currentTime = 0;
   this.intervalId = null;

  }

  start(printTimeCallback) {
    // ... your code goes here
    this.time = setInterval(() => {
      this.currentTime += 1;

    }, 1000);

    if (printTimeCallback) {
      setInterval(() => {
        printTimeCallback()
  
      }, 1000);
    }
    

  }

  getMinutes() {
    // ... your code goes here
    if(this.currentTime === 0){
      return 0;
    }
    else{
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value.toString()}`;
    } else {
      return value.toString();
    }
  }

  stop() {
    // ... your code goes here
  clearInterval(this.time);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return this.computeTwoDigitNumber(this.getMinutes()) 
             + ":" 
             + this.computeTwoDigitNumber(this.getSeconds())
             
   }
 }
