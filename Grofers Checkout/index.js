// javascript code goes here
function calcTotal() {
    let total = 0;
    let price = document.querySelectorAll(".price");
    for (let i = 0; i < price.length; i++) {
      total = total + parseInt(price[i].innerHTML);
    }
    return total;
  }
  document.getElementById("val").innerHTML = calcTotal();