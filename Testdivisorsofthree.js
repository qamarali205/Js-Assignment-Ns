function test_divisors(low, high) {
    //write code here
    // use console.log to display the output
    let div="";
      for(let i=low; i<=high; i++){
        if(i%3==0){
           // console.log(i+" "+"div3");
           div+=i+" "+"div3 ";
        }else{
            //console.log(i);
            div+=i+" ";
        }
      }
      console.log(div);
    }