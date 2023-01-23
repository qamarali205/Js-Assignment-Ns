// javascript code goes here
const maxSumNode=document.getElementById('max-sum');
const aNode=document.getElementById('range-a');
const bNode=document.getElementById('range-b');
const sumNode=document.getElementById('sum');
const rnga=document.getElementById('range-a-value');
const rngb=document.getElementById('range-b-value');
let maxSum=50;
function funmsum(elem){
    if(isNaN(parseInt(elem.value))) {
        aNode.max=0;
        bNode.max=0;
        maxSum=0;
        return;
    }
    let num=parseInt(elem.value)-maxSum;
    maxSum=parseInt(elem.value);
    if(parseInt(aNode.max)==0 && parseInt(bNode.max)>0 && num<0){
        let tmp=parseInt(bNode.max)+num;
        bNode.max=tmp;
    }
    else if(parseInt(bNode.max)==0 && parseInt(aNode.max)>0 && num<0){
        let tmp=parseInt(aNode.max)+num;
        aNode.max=tmp;
    }
    else{
        // if(parseInt(elem.value)%2==1){
            let tmpa=parseInt(aNode.max)+num;
            aNode.max=tmpa;
        // }
        // else{
            let tmpb=parseInt(bNode.max)+num;
            bNode.max=tmpb;
        // }
    }
}
function funa(elem){
    rnga.textContent=elem.value;
    let num=maxSum-parseInt(elem.value);
    bNode.setAttribute('max',num);
    sumNode.textContent=parseInt(elem.value)+parseInt(bNode.value);
}
function funb(elem){
    rngb.textContent=elem.value;
    let num=maxSum-parseInt(elem.value);
    aNode.setAttribute('max',num);
    sumNode.textContent=parseInt(elem.value)+parseInt(aNode.value);
}