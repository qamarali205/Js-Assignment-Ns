const addAndSubtract = {
    num1: 6,
    num2: 3,
    add() {
      return (this.num1 + this.num2);
    },
    subtract() {
      return (this.num1 - this.num2);
    },
  }
  const calculator={
     product(){
      return (this.num1*this.num2);
    },
    divide(){
      return (this.num1/this.num2);
    }
  }
  calculator.__proto__ = addAndSubtract;
  // write code here
  // return the output, do not use console.log
  
  
  
  // Give num1 and num2 as 6 and 3 respectively in the input section separated by a comma and then run the code to check the output