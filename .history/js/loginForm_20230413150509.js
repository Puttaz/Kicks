

function validateSignUpform(){

   // For printing the error messages 
  // $(":text").next().text("*");
 $("span").hide(); 
 $(":text").after("<span></span>");
 $(":password").after("<span></span>");
 // Created different regex for each label
console.log(localStorage);
 var emailCheck = false;
 var passCheck = false;
console.log(emailCheck);
 var userName = $("#userName").val();

 var charPattern = /^[A-Za-z]+$/;
 if (userName == "") {
   document.getElementById("userName").style.margin = "60px 20px 0px 60px";
   $("#userName").next().text(" This field is required.");
  
 } else if (!charPattern.test(userName)) {
   document.getElementById("userName").style.margin = "60px 20px 0px 60px";
   $("#userName").next().text("Only characters allowed.");
  
 } else {
          
 }

 // Email Label
 var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

 var email = $("#emailSign").val();

//  console.log(email);
 //Checking if field is empty 
 if (email == "") {
   document.getElementById("emailSign").style.margin = "20px 60px 0px 60px";
   $("#emailSign").next().text(" This field is required.");
   }
  // Checking if entered email matches the regex pattern
 else if (!emailPattern.test(email)) {
   document.getElementById("emailSign").style.margin = "20px 60px 0px 60px";
   $("#emailSign").next().text(" Must be a valid email address.");
  
 } else 
 {
     emailCheck = true;
 }

 var passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

 var password = $("#passwordSign").val();
  
 if (password == "") {
   document.getElementById("passwordSign").style.margin = "20px 60px 0px 60px";
   $("#passwordSign").next().text(" This field is required.");
   
 }
  // Checking if entered email matches the regex pattern
 else if (!passwordPattern.test(password)) {

   document.getElementById("passwordSign").style.margin = "20px 60px 0px 60px";
   $("#passwordSign").next().text("8 letter, 1 symbol, upper and lower case letters & no");
   
 } else 
 {
       passCheck = true;
 }


    if(emailCheck == true && passCheck == true)
    {
    localStorage.setItem(email, password);
    console.log(localStorage);
    location.replace("index.html");
    }

}

function validateform() {
  
  $("span").hide(); 
  $(":password").after("<span></span>");
  // Created different regex for each label

  var email = $("#email").val();
  var password = $("#password").val();

  
  if(password == localStorage.getItem(email)){
    console.log("yes");
    location.replace("index.html");
  }
  else{
    $("#password").next().text("Invalid email or password."); 
  }  


  


}