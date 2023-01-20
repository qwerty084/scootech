import './assets/style.css';
import { renderTemplate } from './render';
import { scooters, bookScooter, returnScooter } from './scooters';
import { toggleScooterBtn } from './ui';

renderTemplate(scooters);

// book scooter
document.querySelectorAll('.book-scooter').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const scooterId = e.target.getAttribute('data-scooterid');
    toggleScooterBtn(scooterId);
    bookScooter(scooterId);
  });
});

// return scooter
document.querySelectorAll('.return-scooter').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const scooterId = e.target.getAttribute('data-scooterid');
    toggleScooterBtn(scooterId);
    returnScooter(scooterId);
  });
});
