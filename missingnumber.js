function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
    // write code here
    // use console.log for output
    let sumofArrays=0;
    for(let i=0; i<arrayOfIntegers.length; i++){
      sumofArrays+=arrayOfIntegers[i];
    }
      let total=0;
      for(let i=lowerBound; i<=upperBound; i++){
        total+=i;
      }
      console.log(total-sumofArrays);
    }