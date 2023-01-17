function calcTotal() {
    let total = 0;
    const tbody = document.getElementsByTagName("tbody");
    if ((tbody[0].lastElementChild.innerHTML == "<td>Grand Total </td><td data-ns-test=\"grandTotal\">303</td>"))
         tbody[0].removeChild(tbody[0].lastElementChild);

    let price = document.querySelectorAll('[data-ns-test="price"]');
    for (let i = 0; i < price.length; i++) {
         total = total + parseInt(price[i].innerHTML);
    }

    const row = document.createElement("tr");
    row.innerHTML = '<td>Grand Total </td><td data-ns-test="grandTotal">' + total + '</td>';

    tbody[0].appendChild(row);
    
}