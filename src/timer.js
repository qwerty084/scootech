export function startTimer(scooter) {
  let seconds = 0;
  let minutes = 0;

  const interval = setInterval(() => {
    seconds++;
    scooter.rentingPeriod++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    const timeString =
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0');
    scooter.rentingTimer = timeString;
    document.querySelector(`#scooter-timer-${scooter.id}`).innerHTML =
      timeString;
  }, 1000);

  return interval;
}

export function resetTimer(scooterId) {
  document.querySelector(`#scooter-timer-${scooterId}`).innerHTML = '00:00';
}
