function validate() {
    alert("Hello");
}
//fetchingIDs
//const form = document.getElementById('form');
let uname = document.getElementById('name');
let email = document.getElementById('email');
let phn = document.getElementById('phone');
let pass = document.getElementById('password');
let cpass = document.getElementById('cnf-pass');
let span = document.getElementsByTagName('span');

//locking numeric chars
//invalidChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//uname.addEventListener("keydown", function() {
//    if (invalidChars.includes(uname.value)) {
//        uname.preventDefault();
//    }
//});

//validate username
function locknums(evt) {
    const nums = /[^a-zA-Z]/;
    var inp = String.fromCharCode(evt.which);
    if (nums.test(inp)) {
        evt.preventDefault();
        span[0].innerText = "username CANNOT contain numbers or special characters";
        span[0].style.color = "red";
    }
}
uname.onkeydown = function() {

    if (uname.value === "") {
        span[0].innerText = "username cannot be blank";
        span[0].style.color = "red";
    } else
    if (uname.value.length < 3) {
        span[0].innerText = "username must contain atleast 3 characters";
        span[0].style.color = "red";
    } else {
        span[0].innerText = "Valid username";
        span[0].style.color = "lime";
    }
}

//validate email
email.onkeydown = function() {
    //const validMail1 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    //const validMail2 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    const validMail1 = /^([\.\_a-zA-Z0-9]+)@cdpl.in$/;
    const validMail2 = /^([\.\_a-zA-Z0-9]+)@cdpl.com$/;
    const validMail3 = /^([\.\_a-zA-Z0-9]+)@cdpl.co.in$/;
    if (validMail1.test(email.value) || validMail2.test(email.value) || validMail3.test(email.value)) {
        span[1].innerText = "Valid Email Address";
        span[1].style.color = "lime";
    } else if (email.value === "") {
        span[1].innerText = "email cannot be blank";
        span[1].style.color = "red";
    } else {
        span[1].innerText = "Invalid Email Address";
        span[1].style.color = "red";
    }
}


//validate phone number
phn.onkeydown = function() {
    const validPhn = /^[0-9]{10}$/;
    if (validPhn.test(phnVal)) {
        span[0].innerText = "Valid Phone number";
        span[0].style.color = "lime";
    } else {
        span[0].innerText = "Invalid Phone number";
        span[0].style.color = "red";
    }
}

//validate password
pass.onkeydown = function() {
    const validPass1 = /[a-zA-Z0-9~`!@#$%^&*()-_+={}[|;:"<>,./ ?] /;
    const validPass2 = /\B[a-zA-Z0-9\W]/;
    if (validPass1.test(passVal) && validPass2.test(passVal)) {
        span[0].innerText = "Strong Password";
        span[0].style.color = "lime";
    } else if (passVal === "") {
        span[0].innerText = "Password cannot remain Blank"
        span[0].style.color = "red"
    } else {
        span[0].innerText = "Weak Password";
        span[0].style.color = "red";
    }
}

//validate confirm password
cpass.onkeydown = function() {
    if (cpassVal === passVal) {
        span[0].innerText = "Passwords match";
        span[0].style.color = "lime";
    } else if (cpassVal === "") {
        span[0].innerText = "Password cannot remain Blank"
        span[0].style.color = "red"
    } else {
        span[0].innerText = "Passwords do not match";
        span[0].style.color = "lime";
    }
}