
// javascript code goes here
var btn=document.getElementById("calculate");
btn.addEventListener("click",calculate);

function calculate(){
    var amt=document.getElementById("billamt").value;
    var option=document.getElementById("serviceQual").value;
    var nop=document.getElementById("peopleamt").value;
    if(amt==="" || amt<=0){
        window.alert("Please Enter Bill Amount");
    }
    if(nop=="")
    nop=1;
    var tp=document.getElementById("serviceQual").value;
    console.log(tip);
    var money=((amt*tp)/nop).toFixed(2);
    document.getElementById("tip").style.display="block";
    if(nop==1)
    document.getElementById("tip-amount").innerHTML="$ " + money;
    else
    document.getElementById("tip-amount").innerHTML="$ "+money +`</br>`+"each";
    console.log(money);
    //document.getElementById("tip").style.display="none";
}