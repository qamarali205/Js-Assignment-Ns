var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("add_note");
var cls = document.getElementsByClassName("far fa-times-circle")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    modal.addEventListener("keypress", enter);
}
cls.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var content = "";
function enter(e) {
    //modal.style.display = "block";
    content = e.target.value;
    const div = document.getElementById("all_notes");
    if (e.keyCode === 13) {
        div.innerHTML += `<div class="note" style="margin:-5px; background- color:#c2ff3d; transform:rotate(-5deg)">
                        <div class="details">
                        <h1>${content}</h1>
                        </div>
                        </div>`
   
        content = "";
        document.getElementById("user_input").value="";
        modal.style.display = "none";
    }
    // console.log(content);
}