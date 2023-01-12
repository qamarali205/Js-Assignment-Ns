function oddball_sum(array){
    // write code here
    // use console.log to display the output
    let sum=0;
    for(let i=0; i<array.length; i++){
        if(array[i]%2!=0)
        sum+=array[i];
    }
    console.log(sum);
    }