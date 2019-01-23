//Tests the validity of an email address
function checkEmail(inputvalue){
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(inputvalue)){
    alert("Thanks! Check your e-mail to see our latest promos");
    }else{
    alert("Please enter a valid E-mail address.");
    }
}


//function that checks the validity of the contact form
function validateForm() {
  var x=document.forms["signupform"]["name"].value;
  if (x==null || x=="")
   {
    alert("Name must be filled out");
    return false;
   }
   var z=document.forms["signupform"]["email"].value;
   var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
   if (pattern.test(z)) {
     return true;
   }
   else{
     alert("Please enter a valid e-mail address");
   }
   //https://www.w3resource.com/javascript/form/all-numbers.php
   var a=document.forms["signupform"]["phone"].value;
   var numbers=/^[0-9]/;
   if (numbers.test(a)) {
     return true;
   }
   else {
     alert("Please enter a valid phone number.")
   }

   var y=document.forms["signupform"]["message"].value;
   if (y==null || y=="") {
     alert("You must enter a message");
     return false;
   }

}
