// javascript code goes here
const random=[1,2,3,4,5,6,7,8,9,10];
const gScore= document.getElementById('gameScore');
let arr=[];
function arrgenrtr(){
    let j=1
    while(arr.length<10){
        // let r = "cell_"+(Math.floor(Math.random() * 81) + 1);
        // if(arr.indexOf(r) === -1) arr.push(r);
        arr.push("cell_"+j);
        j++;

    }
}
arrgenrtr();
let i=0;
function func(elem){
    if(arr.indexOf(elem.id)===-1) {
        i++;
        elem.style.backgroundColor="green";
        gScore.innerText=i;
        elem.removeAttribute("onclick");
        if(i==71) document.getElementById('resultDisplay').innerText='win';
    }
    else {
        for(let e of arr){
            let elm=document.getElementById(e);
            elm.style.backgroundColor="red";
            elm.style.backgroundImage='url("https://img.icons8.com/emoji/48/000000/bomb-emoji.png")';
        }
        document.getElementById('resultDisplay').textContent="game over";
        document.getElementById('newGame').innerText="Start new game";
    }
}
function rst(){
    i=0;
    gScore.innerText=i;
    let elem=document.getElementsByClassName('box');
    for(let e of elem){
        e.style.backgroundColor="white";
        e.setAttribute("onclick","func(this)");
        e.style.backgroundImage="none";
    }
    arr.length=0;
    arrgenrtr();
    document.getElementById('resultDisplay').textContent='';
    document.getElementById('newGame').textContent="";
}