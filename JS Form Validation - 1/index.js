let form = document.querySelector('#form');
form.addEventListener('submit', function (event) {
        event.preventDefault();
});

var error = document.getElementById("errors-holder");
var result = document.getElementById("result-holder");

function ageChange(e) {
        var age = document.getElementById("q_age").value;
 

        if (age < 5) {
                document.getElementById("submit").disabled = true;
                error.innerHTML = "You need to be atleast 5 years old to participate";
              
        }
        else {
                 document.getElementById("submit").disabled = false;
                error.innerHTML = "";
               
        }
       
}

function handleSubmit(e) {
        var age = document.getElementById("q_age").value;
        var check = document.getElementById("q_owns_phone");
        if (age == 0)
                error.innerHTML = "Please choose age";
        if (check.checked) {
                if (age < 13)
                        result.innerHTML = "You are too young to have a phone";
                else
                        result.innerHTML = "Use your phone in moderation"

        }
        else {
                if (age < 13)
                        result.innerHTML = "You will get a phone soon";
                else
                        result.innerHTML = "You should get a phone"
        }


}