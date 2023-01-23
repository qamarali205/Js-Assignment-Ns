function uniqueNumber(arrOfNum){
    // write code here
    // return the output , do not use console.log here
    let unique = [...new Set(arrOfNum)];
    return unique;
}