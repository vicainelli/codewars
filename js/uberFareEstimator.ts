export function uberFareEstimator(
  rideTime: number,
  rideDistance: number,
  cosPerMinute: number,
  costPerDistance: number,
) {
  const factor = Math.pow(10, 2);
  return (
    Math.round(
      factor * (cosPerMinute * rideTime + rideDistance * costPerDistance),
    ) / factor
  );
}
