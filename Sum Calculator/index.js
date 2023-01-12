// javascript code goes here
function cal(){
    let num1 = Number(document.querySelector("#num1").value);
        let num2 = Number(document.querySelector("#num2").value);
        let sum = num1 + num2;
        document.getElementById("result").value = sum;
}