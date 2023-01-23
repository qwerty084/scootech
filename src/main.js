import './assets/style.css';
import { renderTemplate } from './render';
import { scooters, bookScooter, returnScooter, returnAll } from './scooters';

renderTemplate(scooters);

// book scooter
document.querySelectorAll('.book-scooter').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const scooterId = e.target.getAttribute('data-scooterid');
    bookScooter(scooterId);
  });
});

// return scooter
document.querySelectorAll('.return-scooter').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const scooterId = e.target.getAttribute('data-scooterid');
    returnScooter(scooterId);
  });
});

// return all
document.querySelector('.return-all').addEventListener('click', () => {
  returnAll();
});
