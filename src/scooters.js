import { startTimer } from './timer';
import { toggleAvailableState } from './ui';

export const scooters = [
  {
    id: 1,
    name: 'E-Scooter 1',
    imgSrc:
      'https://im.cyberport.de/is/image/cyberport/210719113700800301900075T?$Zoom_2000$',
    deviceType: 'SoFlow SO3 Gen 2',
    available: true,
    pricePerMin: 0.15,
    pricePerKm: 0.2,
    rentingTimer: '00:00',
    rentingPeriod: 0,
    interval: null,
  },
  {
    id: 2,
    name: 'E-Scooter 2',
    imgSrc:
      'https://im.cyberport.de/is/image/cyberport/210719113700800301900075T?$Zoom_2000$',
    deviceType: 'SoFlow SO3 Gen 2',
    available: true,
    pricePerMin: 0.15,
    pricePerKm: 0.2,
    rentingTimer: '00:00',
    rentingPeriod: 0,
    interval: null,
  },
  {
    id: 3,
    name: 'E-Scooter 3',
    imgSrc:
      'https://im.cyberport.de/is/image/cyberport/210719113700800301900075T?$Zoom_2000$',

    deviceType: 'SoFlow SO3 Gen 2',
    available: true,
    pricePerMin: 0.15,
    pricePerKm: 0.2,
    rentingTimer: '00:00',
    rentingPeriod: 0,
    interval: null,
  },
  {
    id: 4,
    name: 'E-Roller 4',
    imgSrc:
      'https://www.elektro2rad.de/images/product_images/original_images/NINEBOT_ES125S_ATLANTIC_BLUE_ELEKTRO2RAD.jpeg',
    deviceType: 'Segway E125S',
    available: true,
    pricePerMin: 0.3,
    pricePerKm: 0.4,
    rentingTimer: '00:00',
    rentingPeriod: 0,
    interval: null,
  },
];

export function bookScooter(scooterId) {
  const scooter = scooters.filter((scooter) => scooter.id == scooterId)[0];
  scooter.available = false;
  const interval = startTimer(scooter);
  scooter.interval = interval;
  toggleAvailableState(scooterId);
}

export function returnScooter(scooterId) {
  const scooter = scooters.filter((scooter) => scooter.id == scooterId)[0];
  scooter.available = true;
  clearInterval(scooter.interval);
  toggleAvailableState(scooterId);
  // TODO: calculate and display cost
}
