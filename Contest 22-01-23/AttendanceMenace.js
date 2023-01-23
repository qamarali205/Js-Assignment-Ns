function getStudentRollNumber(section,array){
//code here
 var ans=[]
 for(let i=0; i<array.length; i++){
     if(array[i][0]===section){
         if(!ans.includes(array[i].slice(1)))
         ans.push(array[i].slice(1));
     }
 }
 ans.sort(function(a,b){
     a=parseInt(a);
     b=parseInt(b);
     return a-b;
 });

 return ans;
}