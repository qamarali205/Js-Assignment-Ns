// javascript code goes here
var pageNumber = 0;
window.onload = fetchPage();
const nextBtn = document.getElementById("load_next");
const prevBtn = document.getElementById("load_prev")

async function fetchIssues(page) {
    const res = await fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`);
    const issues = await res.json();
    return issues;
}

async function fetchPage() {
    pageNumber++;
    document.getElementById("number").innerHTML = pageNumber
    const ol = document.getElementById("issueNames");
    ol.innerHTML = "";
    var datas = await fetchIssues(pageNumber)
    for (var data of datas) {
        var li = document.createElement("li");
        li.textContent = data.title;
        if(pageNumber==2) li.textContent+='2';
        ol.append(li);
    }
}

function prevPage() {
    pageNumber = pageNumber - 2;
    if (pageNumber == -1)
        return;
    fetchPage();
}

nextBtn.addEventListener("click", fetchPage);
prevBtn.addEventListener("click", prevPage);