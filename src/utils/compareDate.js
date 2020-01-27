const compareDate = (date1, date2) => date1.getDate() === date2.getDate()
 && date1.getMonth() === date2.getMonth()
&& date1.getYear() === date2.getYear();

export default compareDate;
