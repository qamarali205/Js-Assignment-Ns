// javascript code goes here
const allBtn = document.querySelectorAll('button');
const fun = function (e) {
    document.getElementById('input').value += `${e.textContent}`
}
allBtn[15].addEventListener('click', function() {
    const exp = document.getElementById('input').value;
    document.getElementById('input').value = `${eval(exp)}`;
})
allBtn[16].addEventListener('click', function() {
    document.getElementById('input').value = '';
})