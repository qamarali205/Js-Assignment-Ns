// javascript code goes here
const box=document.getElementById('box');
let isOdd=true;
function rotation(){
    if(isOdd === true){
        box.className = "odd"
        
    } else if (isOdd === false){
        box.className = "even"
    }
    isOdd = !isOdd;

}