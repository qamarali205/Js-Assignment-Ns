// javascript code goes here
const container= document.getElementById("gameContainer")
const arr=[];
let food=1;
let pixelId=761;
window.onload=grid();
let intrvl;
function grid(){
    let count=0;
    for(let i=0;i<40;i++){
        for(let j=0;j<40;j++){
            count++;
            const div=document.createElement("div");
            div.id="pixel"+count;
            arr.push(count);
            container.append(div);
        }
    }
    arr.slice(760,1);
    placeFood();
    document.getElementById(`pixel${food}`).className="food";
    //document.getElementById("pixel800").className="snakeBodyPixel";
    document.addEventListener("keydown", changeDirection);
    setInterval(update,100);
}
let length=2;
let direction='left';
function placeFood() {
    const indx = Math.floor(Math.random() * arr.length);
    food=arr[indx];
}
// const arr=[800];
function update(){
    if(pixelId==food) {
        length++;
        document.getElementById('pointsEarned').textContent=length-1;
        placeFood();
        document.getElementById(`pixel${food}`).className="food";
    }
    let pxl;
    if(direction=='left') {
        pxl=document.getElementById(`pixel${pixelId}`);
        pxl.className='snakeBodyPixel';
        if(pixelId%40==1) pixelId=pixelId+39;
        else pixelId=pixelId-1;
        const index=arr.indexOf(pixelId);
        arr.splice(index,1);
    }
    if(direction=='up'){
        pxl=document.getElementById(`pixel${pixelId}`);
        pxl.className='snakeBodyPixel';
        if(pixelId>=1 && pixelId<=40) pixelId=pixelId+1560;
        else pixelId=pixelId-40;
        const index=arr.indexOf(pixelId);
        arr.splice(index,1);
    }
    if(direction=='down'){
        pxl=document.getElementById(`pixel${pixelId}`);
        pxl.className='snakeBodyPixel';
        if(pixelId>=1561 && pixelId<=1600) pixelId=pixelId-1560;
        else pixelId=pixelId+40;
        const index=arr.indexOf(pixelId);
        arr.splice(index,1);
    }
    if(direction=='right'){
        pxl=document.getElementById(`pixel${pixelId}`);
        pxl.className='snakeBodyPixel';
        if(pixelId%40==0) pixelId=pixelId-39;
        else pixelId=pixelId+1;
        const index=arr.indexOf(pixelId);
        arr.splice(index,1);
    }
    let clength=length
    const stimeout=setTimeout(()=>{
        let num=pixelId;
        clearTimeout(stimeout);
        if(length==clength) {
            pxl.className='';
            arr.push(num);
        }
        else{
            const stimeout2=setTimeout(()=>{
                clearTimeout(stimeout2);
                pxl.className='';
                arr.push(num);
            },(length-clength)*100);
        }
    },length*100);
}
function changeDirection(e) {
    if (e.code == "ArrowUp" && direction!='down') {
        // If up arrow key pressed with this condition...
        // snake will not move in the opposite direction
        direction='up';
    }
    else if (e.code == "ArrowDown" && direction!='up') {
        //If down arrow key pressed
        direction='down';
    }
    else if (e.code == "ArrowLeft" && direction!='right' ) {
        //If left arrow key pressed
        direction='left';
    }
    else if (e.code == "ArrowRight" && direction!='left') {
        //If Right arrow key pressed
        direction='right';
    }
}