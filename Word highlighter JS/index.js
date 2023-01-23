// javascript code goes here
const box = document.getElementById('paragraph-input');
const search = document.getElementById('word-input');
const wCount = document.getElementById('words-counter');
const igCase = document.getElementById('ignore-case');
search.addEventListener('input', func);
function func(){
  const searchText = search.value;
  if(searchText==''){
      box.innerHTML=box.textContent
      const total=box.getElementsByClassName('highlighted-txt');
      wCount.innerText=total.length;
  }
  else{
  let regex = new RegExp(searchText, 'gi');
  if(!igCase.checked) regex=new RegExp(searchText,'g');
  let text = box.innerHTML;
  text = text.replace(/(<span class="highlighted-txt">|<\/span>)/gim, '');
  const newText = text.replace(regex, '<span class="highlighted-txt">$&</span>');
  box.innerHTML = newText;
  const total=box.getElementsByClassName('highlighted-txt');
  wCount.innerText=total.length;
  }
}
igCase.addEventListener('change',func);