// javascript code goes here
function addUIItem(txt) {
    let li = document.createElement("li");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[list.length]);
    
  }
  let input = document.querySelector("#todo-input");
  let btn = document.querySelector("#add-todo");
  let list = document.querySelector("#todo-holder");
  // load saved tasts
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // add UI elements for any saved task
  savedTasks.forEach(addUIItem);
  
  btn.addEventListener("click", () => {
    let txt = input.value;
    if (txt === "") {
      savedTasks=[];
    } else {
      savedTasks.push(txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
      input.value = "";
      addUIItem(txt);
    }
  });
  
  list.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    }
  });