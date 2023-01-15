function convertTheArray(array,word){
   
    let arr=[];
    for(let i of array){
        arr.push(((i.toLowerCase())+word))
    }
    
    return arr;
    
       
    }