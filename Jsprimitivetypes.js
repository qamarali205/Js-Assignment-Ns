// Complete the reverseString function 
function reverseString(n) {
    //Write Code Here
    let str="";
    for(let i=n.length-1; i>=0; i--){
        str+=n[i];
    }
    return str;
    
}