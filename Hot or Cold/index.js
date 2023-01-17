// javascript code goes here
function displayRandomNumber(){
    let value=Math.floor(Math.random()*40)-20;
    document.getElementById("num").innerHTML=value;
}