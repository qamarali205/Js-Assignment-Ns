const table = document.getElementById("table");
const form = document.getElementById("item-form");
const nameInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
let total = 0;
function insertItem() {
    const tr = document.createElement('tr');
    const itemName = document.createElement('td');
    const itemPrice = document.createElement('td');
    const srNo = document.createElement('td');
    itemName.dataset.nsTest = 'item-name';
    console.log(nameInput.value, priceInput.value);
    itemName.innerText = nameInput.value;
    itemPrice.innerText = priceInput.value;
    if(nameInput.value != "" && priceInput.value!=""){
        table.dataset.numberOfItems = parseInt(table.dataset.numberOfItems) + 1;
        srNo.innerText = table.dataset.numberOfItems;
        itemPrice.dataset.nsTest = 'item-price';
        tr.append(srNo,itemName,itemPrice);
        document.getElementById('grandTotalContainer').remove();
        const grandTotalTr = document.createElement('tr');
        const grandTotalTd = document.createElement('td');
        grandTotalTr.setAttribute('id','grandTotalContainer');
        grandTotalTd.setAttribute('colspan','3');
        total+= parseInt(priceInput.value);
        grandTotalTd.innerText = total;
        table.append(tr);
        grandTotalTd.dataset.nsTest="grandTotal";
        grandTotalTr.append(grandTotalTd);
        table.append(grandTotalTr);
        priceInput.value = "";
        nameInput.value = "";
    }
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    insertItem(); 
})