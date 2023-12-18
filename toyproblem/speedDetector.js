function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  const maxDemeritPoints = 12;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

    if (demeritPoints >= maxDemeritPoints) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }
}

console.log (speed);
