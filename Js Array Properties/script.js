const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const display = document.getElementById('display');
const even = document.getElementById('even');
const odd = document.getElementById('odd');
const join = document.getElementById('join');
const err = document.getElementById('error');
err.style.display="none";

const inputArray = [];

addBtn.addEventListener('click', () => {
    let a=input.value.split(',');
    for(let element of a){
        if(isNaN(element)) {
            err.style.display="block";
            inputArray.length=0;
            return;
        }
        inputArray.push(element);
    }
    err.style.display="none";
    display.innerText="["+inputArray+"]";
})

even.addEventListener('click', () => {
   let a=inputArray.filter((elem)=>{return !(elem%2)});
   display.innerText="["+a+"]";
})

odd.addEventListener('click', () => {
    let a=inputArray.filter((elem)=>{return elem%2});
   display.innerText="["+a+"]";
})

join.addEventListener('click', () => {
    let a=inputArray.join('');
    display.innerText=a;
})