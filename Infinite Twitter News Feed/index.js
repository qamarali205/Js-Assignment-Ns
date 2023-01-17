// javascript code goes here

let currentCount = 0;
function loadMore() {
  currentCount += 10;
  for (let i = currentCount - 10; i < currentCount; i++) {
    let newItem = document.createElement("div");
    newItem.classList.add("newpara");
    newItem.innerHTML = "newpara " + i;

    document.getElementById("content").appendChild(newItem);
  }
}

loadMore();
window.addEventListener("scroll", function() {

  let scrollPosition = window.scrollY + window.innerHeight;

  let documentHeight = document.body.offsetHeight;

  
  if (scrollPosition >= documentHeight) {

    loadMore();
  }
});