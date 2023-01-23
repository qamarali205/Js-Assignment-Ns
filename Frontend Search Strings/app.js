const contentDivNode = document.getElementById('content_div');
const inputNode = document.getElementById('search-bar');

const intialContentDivInnerHTML = contentDivNode.innerHTML;

const onSearchButtonClick = () => {
    let searchString = inputNode.value;
    contentDivNode.innerHTML = intialContentDivInnerHTML.replaceAll(searchString, '<mark>' + searchString + '</mark>');
};

document.getElementById('search-button').addEventListener('click', onSearchButtonClick);