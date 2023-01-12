// You need to return sorted array, not string
// arr: input array
// arrSize: size of array
function sortEvenOdd(arr, arrSize)
  {
    arr.sort((a,b) => a-b);
    const a=[];

    for(let i=arrSize-1;i>=0;i--){
      if(arr[i]%2!=0)
        a.push(arr[i]);
    }
      for(let i=0;i<arrSize;i++){
        if(arr[i]%2==0)
        a.push(arr[i]);
        
      }
      arr=a;
      return arr;
  }