function takeMultipleNumbersAndAdd (){
    // write your code here

    // return the output using return keyword
    // do not console.log it
     let sum =0; 
  for(let i=0; i<arguments.length; i++){
     sum += arguments[i];
  }
   return sum;

}