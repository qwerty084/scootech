export function toggleAvailableState(scooterId) {
  document
    .querySelector(`[data-scooter-available-${scooterId}]`)
    ?.classList.toggle('hidden');
  document
    .querySelector(`[data-scooter-booked-${scooterId}]`)
    ?.classList.toggle('hidden');
}

export function toggleScooterBtn(scooterId) {
  document
    .querySelector(`[data-type="book"][data-scooterid="${scooterId}"]`)
    ?.classList.toggle('hidden');

  document
    .querySelector(`[data-type="return"][data-scooterid="${scooterId}"]`)
    .classList.toggle('hidden');
}
