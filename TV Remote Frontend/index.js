// javascript code goes here
const btns = document.querySelectorAll('button')//[id^="but"]')
var on=false;
btns.forEach(btn => {

   btn.addEventListener('click', event => {
       if(event.target.id=="power-off")
       toggle();
       else if(on)
        document.getElementById("container").innerHTML=event.target.innerHTML;
   });

});
function toggle(){
    var power=document.getElementById("container");
    if(power.innerHTML=="Power Off"){
        power.innerHTML="Power On"
        on=true;
    }
    else{
        power.innerHTML="Power Off"   
        on=false;
    }

}