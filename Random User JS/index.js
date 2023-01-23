
// javascript code goes here
const url = 'https://randomuser.me/api/';
const imgTag = document.getElementById('img');
const nameTag = document.getElementById('name');
const ageEl = document.getElementById('age');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const btnAge = document.getElementById('btnAge');
const btnEmail = document.getElementById('btnEmail');
const btnPhone = document.getElementById('btnPhone');
let userData = {};
async function getUserData () {
    const res = await fetch(url);
    const data = await res.json();
    return data.results[0];
}
getUserData()
    .then((data) => {
        userData = data;
        addImgAndName(data.picture.large, data.name)
    }
);

function addImgAndName (imgrUrl, uName) {
    imgTag.setAttribute('src', imgrUrl);
    nameTag.textContent = `${uName.first} ${uName.last}`;
}

// Event Handeler
btnAge.addEventListener('click', function () {
    ageEl.textContent = userData.dob.age;
    emailEl.textContent = '';
    phoneEl.textContent = '';
});
btnEmail.addEventListener('click', function () {
    ageEl.textContent = '';
    emailEl.textContent = userData.email;
    phoneEl.textContent = '';
});
btnPhone.addEventListener('click', function () {
    ageEl.textContent = '';
    emailEl.textContent = '';
    phoneEl.textContent = userData.phone;
});


document.getElementById('getUser').addEventListener('click', function () {
    ageEl.textContent = '';
    emailEl.textContent = '';
    phoneEl.textContent = '';
    getUserData()
    .then((data) => {
        userData = data;
        addImgAndName(data.picture.large, data.name)
    });
});