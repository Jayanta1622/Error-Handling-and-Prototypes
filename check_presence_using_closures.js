function numberChecker(numbers) {
    return function (numberToCheck) {
      return numbers.includes(numberToCheck);
    };
  }
  const numbersArray = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(numbersArray);
  
  console.log(checkNumber(3));
  console.log(checkNumber(6)); 
  