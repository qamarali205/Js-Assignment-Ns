let generateOrder = function(starting) {
    var count = 0;
     return function() {
         count++;
         return "Total orders = "+count;
     }
 }