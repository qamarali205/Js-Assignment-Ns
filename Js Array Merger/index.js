const arr1 = document.getElementById('1');
const arr2 = document.getElementById('2');
const btn1 = document.getElementById('add-1');
const btn2 = document.getElementById('add-2');
const err = document.getElementById('error');

const firstArray = [];
const secondArray = [];

btn1.addEventListener('click', () => {
    let a=arr1.value.split(',');
    for(let element of a){
        if(isNaN(element)) {
            err.style.display="block";
            return;
        }
        firstArray.push(element);
    }
    err.style.display="none";
    document.getElementById('disp-1').innerText="["+firstArray+"]";
})

btn2.addEventListener('click', () => {
    let a=arr2.value.split(',');
    for(let element of a){
        if(isNaN(element)) {
            err.style.display="block";
            return;
        }
        secondArray.push(element);
    }
    err.style.display="none";
    document.getElementById('disp-2').innerText="["+secondArray+"]";
})

document.getElementById('merge').addEventListener('click', () => {
    const a=firstArray.concat(secondArray);
    document.getElementById('result').innerText="["+a+"]";
})