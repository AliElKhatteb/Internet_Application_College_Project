
var team=[{username:"ali",password:"12345678"},{username:"sahier",password:"12345678"},{username:"safya",password:"12345678"},
{username:"fahmy",password:"12345678"},{username:"fahd",password:"12345678"},{username:"rouf",password:"12345678"},{username:"nourhan",password:"12345678"}];

function validateForm() {
    var username = document.forms["myForm"]["user"].value;
    var password =document.forms["myForm"]["password"].value;
     if (username == "" || password=="") {
        alert("please Enter Username or Password");
        return false;
    }

    for(i=0;i<team.length;i++){
        if(username==team[i].username && password==team[i].password){
            alert("Right User name");
            return true;
        }
   
    }
    alert("Wrong User Name And Password");
    return false;
    
}

function validateReg(){
    var username = document.forms["regform"]["user"].value;
    var password =document.forms["regform"]["pass"].value;
    var email=document.forms["regform"]["email"].value;
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");

    if (username == "" || password=="" || email=="") {
        alert("please Enter Username or Password or email");
        return false;
    }
    if(password.length<8){
        alert("password too short");
        return false;
    }
    if(atpos<1 || dotpos<atpos+2 || dotpos+2>email.length){
        alert("Please Enter A Valid Email Address");
        return false;
    }




}

function sendMail(){
    var fname=document.forms["contactForm"]["firstname"].value;
    var lname=document.forms["contactForm"]["lastname"].value;
    var textArea=document.forms["contactForm"]["subject"].value;
    if(fname=="" || lname=="" || textArea==""){
        alert("Please Write Missing Information");
        return false;
    }
    alert("Email has Been Send");
    return true;




}







// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}