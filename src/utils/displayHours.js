/* eslint-disable no-mixed-operators */

export default (hour) => {
  if (hour > 12) return `${(hour)}:00 PM`;
  if (hour === 12) return `${hour}:00 PM`;
  if (hour < 12 && hour === 10 || hour === 11) return `${hour}: 00 AM`;
  return `0${hour}:00 AM`;
};
