function calculate(operation) {
    //  write your code here 
      function sum(a,b){
          if(operation === "ADD"){
              console.log(a+b);
          }else if(operation === "SUBTRACT"){
              console.log(a-b);
          }
      }
      return sum;
}