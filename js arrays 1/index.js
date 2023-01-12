window.onload = function () {
    init();
  };
  var arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  function init(params) {
    var ele = document.getElementById('array');
    console.log(arr);
    ele.innerText = arr;
  }
  
  function sort(){
    arr.sort(function(a, b){return a - b});
    alert(arr.toString());
  }
  
  function revsort(){
    arr.sort(function(a, b){return b - a});
    alert(arr.toString());
  }
  
  function first5(){
    alert(arr.slice(0,5).toString());
  }
  
  function last5(){
    alert(arr.slice(-5).toString());
  }
  
  function avg(){
    let sum=0;
    for(let i=0;i<arr.length;i++)
      sum+=arr[i];
    alert(sum/arr.length);
  }