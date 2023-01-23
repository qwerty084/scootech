let distance = 1;

export function calcSingleSum(scooter) {
  let singleTimeSum = (scooter.rentingPeriod / 60) * scooter.pricePerMin;
  console.log('calcSingleSum' + singleTimeSum);

  let distanceSum = distance * scooter.pricePerKm;

  if (singleTimeSum > distanceSum) {
    return distanceSum;
  } else {
    return singleTimeSum;
  }
}
