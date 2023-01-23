export function calcSingleSum(scooter, distanceValue) {
  let singleTimeSum = (scooter.rentingPeriod / 60) * scooter.pricePerMin;
  let distanceSum = distanceValue * scooter.pricePerKm;

  if (singleTimeSum > distanceSum) {
    return distanceSum;
  } else {
    return singleTimeSum;
  }
}
