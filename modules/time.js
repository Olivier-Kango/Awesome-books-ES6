import { DateTime } from './luxon.js';

const displayTime = () => {
  const date = DateTime.now();
  return date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

setInterval(displayTime, 1000);

export default displayTime;