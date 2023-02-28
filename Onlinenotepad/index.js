// javascript code goes here

const flag = document.getElementById("feature-flag");
const key="autosave-data";
window.onload=load();

function load(){
    console.log(localStorage.getItem(key))
    document.getElementById("textarea").value=localStorage.getItem(key);
}

flag.addEventListener("change", flagCheck)
function flagCheck() {
    var local;
    if (flag.checked) {
        
        local=setInterval(()=>{
            var text=document.getElementById("textarea").value
            localStorage.setItem(key, text);
        },1000)
    }
    else{
        clearInterval(local)
    }
}