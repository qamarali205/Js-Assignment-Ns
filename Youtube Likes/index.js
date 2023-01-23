// javascript code goes here
const like=document.getElementById('increment');
const dislike=document.getElementById('decrement');

var total=document.getElementById('counter');
var count=0;

total.innerHTML=count;

const incre=() => {
  count++;
  total.innerHTML = count;
};
const decre=()=>{
  if(count===0){
    return count;
  }else{ 
    count--;
  }
    total.innerHTML=count;
};

increment.addEventListener("click",incre);
decrement.addEventListener("click", decre);