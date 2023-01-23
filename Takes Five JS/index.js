// javascript code goes here
var div1=document.getElementById("1");
var div2=document.getElementById("2");
var div3=document.getElementById("3");
var div4=document.getElementById("4");
var div5=document.getElementById("5");
let count=1;
function pre(){
        count=count-1;
        const val=(count-1)*5;
        div1.innerHTML=val+1;
        div2.innerHTML=val+2;
        div3.innerHTML=val+3;
        div4.innerHTML=val+4;
        div5.innerHTML=val+5;
        if(count==1)
            document.getElementById("back-button").disabled=true;
    

}
function next(){
    if(count>0)
        document.getElementById("back-button").disabled=false;
        const val=count*5+1;
        div1.innerHTML=val;
        div2.innerHTML=val+1;
        div3.innerHTML=val+2;
        div4.innerHTML=val+3;
        div5.innerHTML=val+4;
        count=count+1;
    

    }