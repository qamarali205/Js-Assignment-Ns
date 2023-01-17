// javascript code goes here
var n = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("text1");

function check() {
    n++;
    disp.innerHTML = n;
    if (disp.innerHTML % 2 != 0)
        btn.style.color = 'red';
    else
        btn.style.color = 'blue';
}