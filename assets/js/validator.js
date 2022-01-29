//fetching the objects
//const form = document.getElementById('form');
let uname = document.getElementById('name');
let email = document.getElementById('email');
let phn = document.getElementById('phone');
let pass = document.getElementById('password');
let cpass = document.getElementById('cnf-pass');
let span = document.getElementsByTagName('span');
let lock = 0;
let flag = 0;

//locking numeric chars
//invalidChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//uname.addEventListener("keydown", function() {
//    if (invalidChars.includes(uname.value)) {
//        uname.preventDefault();
//    }
//});

//validate username
uname.onkeypress = function(evt) {
    const rgx1 = /[^a-zA-Z\s]/;
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard
    if (rgx1.test(inp)) {
        span[0].innerText = "Name CANNOT contain numbers or special characters";
        span[0].style.color = "tomato";
        evt.preventDefault(); //to lock numeric and special char input
    }
    if ((evt.keyCode || evt.charCode) === 8) {
        evt.allowDefault();
    }
}


uname.onkeydown = function() {
    if (0 < uname.value.length < 3) {
        span[0].innerText = "Name must contain ATLEAST 3 characters";
        span[0].style.color = "tomato";
    } else {
        span[0].innerText = "VALID Name";
        span[0].style.color = "lime";
    }
}

uname.onkeyup = function() {
    if (uname.value === "") {
        span[0].innerText = "Name CANNOT remain BLANK";
        span[0].style.color = "yellow";
    }
}

//validate email
email.onkeypress = function(evt) {
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard
    const rgx1 = /[^a-z0-9@._]/i;
    const rgx2 = /[A-Z]/;
    const rgx3 = /^([0-9]+)$/;

    if (rgx1.test(inp)) {
        span[1].innerText = "Invalid Character entered";
        span[1].style.color = "tomato";
        evt.preventDefault(); //to lock the keyboard
    }
    if (rgx2.test(inp)) {
        span[1].innerText = "Email Address is ALWAYS lowercase";
        span[1].style.color = "tomato";
        evt.preventDefault(); //to lock the keyboard
    }
    if (inp === "@" && rgx3.test(email.value)) {
        span[1].innerText = "Email Address must NOT contain ONLY numbers";
        span[1].style.color = "tomato";
        evt.preventDefault(); //to lock the keyboard
    }
    if (inp === "@" && (/[@]/).test(email.value)) {
        span[1].innerText = "Email Address CANNOT contain '@' more than once";
        span[1].style.color = "tomato";
        evt.preventDefault(); //to lock the keyboard
    }
    if ((evt.keyCode || evt.charCode) === 8) {
        evt.allowDefault();
    }
}


email.onkeyup = function() {
    //const validMail1 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    //const validMail2 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    const rgx1 = /^([\.\_a-z0-9]+)@cdpl.in$/;
    const rgx2 = /^([\.\_a-z0-9]+)@cdpl.com$/;
    const rgx3 = /^([\.\_a-z0-9]+)@cdpl.co.in$/;
    if (email.value === "") {
        span[1].innerText = "Email Address CANNOT remain BLANK";
        span[1].style.color = "yellow";
    } else if (rgx1.test(email.value) || rgx2.test(email.value) || rgx3.test(email.value)) {
        span[1].innerText = "VALID Email Address";
        span[1].style.color = "lime";
    } else {
        span[1].innerText = "INVALID Email Address";
        span[1].style.color = "tomato";
    }
}


//validate phone number
function validatePhone(evt) {
    const validPhn = /^[0-9]{10}$/;
    if (validPhn.test(phnVal)) {
        span[0].innerText = "Valid Phone number";
        span[0].style.color = "lime";
    } else {
        span[0].innerText = "Invalid Phone number";
        span[0].style.color = "tomato";
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
        span[0].style.color = "tomato"
    } else {
        span[0].innerText = "Weak Password";
        span[0].style.color = "tomato";
    }
}

//validate confirm password
cpass.onkeydown = function() {
    if (cpassVal === passVal) {
        span[0].innerText = "Passwords match";
        span[0].style.color = "lime";
    } else if (cpassVal === "") {
        span[0].innerText = "Password cannot remain Blank"
        span[0].style.color = "tomato"
    } else {
        span[0].innerText = "Passwords do not match";
        span[0].style.color = "lime";
    }
}