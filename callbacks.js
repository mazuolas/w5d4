class Clock {
  constructor() {


    // 1. Create a Date object.
    const time = new Date(Date.now());

    // 2. Store the hours, minutes, and seconds.
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();

    // 3. Call printTime.
    Clock.printTime(this.hours, this.minutes, this.seconds);

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);

  }

  static printTime(hours, minutes, seconds) {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${hours}:${minutes}:${seconds}`);

  }

  _tick() {

    // 1. Increment the time by one second.
    this.seconds += 1;

    if (this.seconds > 59) {
      this.seconds -= 60;
      this.minutes += 1;
    }
    if (this.minutes > 59){
      this.minutes -= 60;
      this.hours +=1;
    }
    this.hours = this.hours % 12;


    // 2. Call printTime.
    Clock.printTime(this.hours, this.minutes, this.seconds);
  }


}



const clock = new Clock();
