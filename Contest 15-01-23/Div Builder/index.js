var btn=document.getElementById("create-div-btn");
var main=document.getElementById("div-holder");
btn.addEventListener("click", function(e){
    e.preventDefault();
    const id=document.getElementById("div-id-input").value;
    const height=document.getElementById("div-height-input").value;
    const width=document.getElementById("div-width-input").value;

    const text=document.getElementById("div-content-input").value;


    const div=document.createElement('div');
    div.setAttribute("id",id);
    div.classList.add('my-div');
    div.innerText=text;
    div.style.height=height+"px";
    div.style.width=width+"px";
    main.appendChild(div);
})