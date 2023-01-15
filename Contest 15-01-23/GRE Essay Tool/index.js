const display=document.getElementById("wordCount");
const input=document.getElementById("evaluatedText");
input.addEventListener("input",function countWord(){
    let size=input.value.trim().length ? input.value.trim().split(/\s+/).length:0;
    display.textContent=size;
})