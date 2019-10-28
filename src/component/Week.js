class Week {
  constructor() {
    this.today = new Date();
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth();
    this.startDate = new Date(this.year, this.month, this.today.getDate() - this.today.getDay());
    this.endDate = new Date(this.year, this.month, this.today.getDate() + (6 - this.today.getDay()));
  }

  next() {

    
    // if ((firstDayOfTheWeek + 7) > numberOfDays) nextMonth();
    // const newFirstDayOfTheWeek = new Date(year, month, (firstDayOfTheWeek + 7)).getDate();
    // const newLastDayOfTheWeek = new Date(year, month, (newFirstDayOfTheWeek + 6)).getDate();

    // setFirstDayOfTheWeek(newFirstDayOfTheWeek);
    // setLastDayOfTheWeek(newLastDayOfTheWeek);
  }

}



export default new Week();
