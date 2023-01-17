function swapTheme() {
    var div = document.getElementById('app');
    var button=document.getElementById('swap');
   div.classList.toggle("night");
   button.classList.toggle("button_night");
}