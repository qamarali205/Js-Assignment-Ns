function getNumbersGreaterThan5(nums) {
    // write code here
    // return the output , do not use console.log here
    const ans=[];
    for(let i=0; i<nums.length; i++){
        if(nums[i]>5){
            ans.push(nums[i]);
        }  
    }
    return ans;
}