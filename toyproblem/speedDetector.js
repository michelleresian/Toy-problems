function speedDetector(speed) {
    const speedLimit = 70; // Speed limit
    let demeritPoints = 0;
  
    if (speed <= speedLimit) {
      return "Ok"; // No demerit points if speed is within the limit
    }
  
    const speedAbove = speed - speedLimit; // Calculate how much the speed is above the limit
    demeritPoints = Math.floor(speedAbove / 5); // Calculate demerit points
  
    if (demeritPoints > 12) {
      return "License suspended"; // Check for license suspension
    }
  
    return `Points: ${demeritPoints}`;
  }
  
  console.log(speedDetector(80)); // Output: "Points: 2"
  console.log(speedDetector(65)); // Output: "Ok"
  console.log(speedDetector(95)); // Output: "Points: 5"
  console.log(speedDetector(130)); // Output: "License suspended"