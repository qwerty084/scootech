export function startTimer(scooter) {
  let seconds = 0;
  let hours = 0;
  let minutes = 0;

  const interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      scooter.rentingPeriod++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    const timeString =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0');
    scooter.rentingTimer = timeString;
    document.querySelector(`#scooter-timer-${scooter.id}`).innerHTML =
      timeString;
  }, 1000);

  return interval;
}

export function stopTimer(interval) {
  clearInterval(interval);
}
