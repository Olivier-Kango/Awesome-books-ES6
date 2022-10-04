import './modules/class.js';
import './modules/spa.js';
import displayTime from './modules/time.js';

const dateContainer = document.querySelector('.date-time');

const setRealTime = () => {
  dateContainer.innerHTML = displayTime();
};
setRealTime();
setInterval(setRealTime, 1000);