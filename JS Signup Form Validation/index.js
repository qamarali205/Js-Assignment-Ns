const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;




        function isEmailAddress(str) {

            return String(str).match(pattern);

        }

        function signUpFormValidation(formData){
            const error = {}
            const fields = ['name','email', 'password']
   
            fields.forEach(field => {
                if (!formData[`${field}`]) {
                    error[[field]] = `${field} not present`
                    let vari="error"+field;                                      document.getElementById(vari).innerHTML=`${field} not present`;
                }
            })
            if (formData.name && (formData.name.length < 3 || formData.name.length > 20)) {
                error['name'] = 'Name should be atleast 4 chars and less than 20 chars'
              document.getElementById('errorname').innerHTML="Name should be atleast 4 chars and less than 20 chars";
            }
          else if(formData.name){
            document.getElementById('errorname').innerHTML="";
          }
            if (formData.password && (formData.password.length < 6 ||            formData.password.length > 30)) {
                error['password'] = 'Password should be atleast 6 chars and less than 30 chars'
              document.getElementById('errorpassword').innerHTML="Password should be atleast 6 chars and less than 30 chars";
            }
          else if(formData.password){
            document.getElementById('errorpassword').innerHTML="";
          }

            if (formData.email && isEmailAddress(formData.email) === null) {
                error['email'] = 'Not a valid email'
              document.getElementById('erroremail').innerHTML="Not a valid email";
            }
          else if(formData.email){
            document.getElementById('erroremail').innerHTML="";
          }
            if (Object.keys(error).length === 0) return null
            return error
        }
function formVal(){
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const password = document.getElementById('password').value;
        const formFieldsData = {name,email,password}; 
      
        const errors = signUpFormValidation(formFieldsData);
        console.log(errors) 

}