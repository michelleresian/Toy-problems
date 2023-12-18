function inputStudentMark(x) {
    if (x > 100 || x < 0) { // Check if x is out of the valid range (0 to 100)
      return "Invalid input"; // Return an error message for invalid input
    } else if (x >= 80) {
      return "A";
    } else if (x >= 60) {
      return "B";
    } else if (x >= 50) {
      return "C";
    } else if (x >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  
  console.log(inputStudentMark(60)); // Output: "B"
  