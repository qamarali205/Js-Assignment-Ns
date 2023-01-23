// arr is unsorted array of powers
    // n is the number of elements in the array
    // k is required number of elements
    function maxPower(arr, n,k) {
        // write code here
        // do not console.log the answer
        // return the answer
        
           let B=arr.map(x=>x*x);
           B.sort((a,b)=>b-a);
           return B.slice(0,k).reduce((acc,x)=>acc+x,0);
      }