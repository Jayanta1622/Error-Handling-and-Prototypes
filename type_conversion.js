function convertToNumber(inputString) {
    try {
      const number = parseInt(inputString);
      if (isNaN(number)) {
        throw new Error("Invalid number");
      }
      return number;
    } catch (error) {
      return "Invalid number";
    }
  }
  
  // Test cases
  console.log(convertToNumber("42")); // Output: 42
  console.log(convertToNumber("Hello, world!")); // Output: "Invalid number"
  