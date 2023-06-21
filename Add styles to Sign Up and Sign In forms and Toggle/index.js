// javascript code goes here
document.getElementById('signup-form').style.display='block';
document.getElementById('signin-form').style.display='none';
document.getElementById('toggle-btn').addEventListener('click',function(){
    var signupFrom=document.getElementById('signup-form');
    var signinForm=document.getElementById('signin-form');
    var toggleBtn=document.getElementById('toggle-btn');

    if(signupFrom.style.display==='block'){
        signupFrom.style.display='none';
        signinForm.style.display='block';
        toggleBtn.textContent="Don't have an account? Sign Up!";
    }else{
        signupFrom.style.display='block';
        signinForm.style.display='none';
        toggleBtn.textContent="Already have an account? Sign In!";
    }
});