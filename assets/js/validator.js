//fetching the objects
//const form = document.getElementById('form');
let uname = document.getElementById('name');
let email = document.getElementById('email');
let phn = document.getElementById('phone');
let pass = document.getElementById('password');
let cpass = document.getElementById('cnf-password');
let addrs = document.getElementById('address');
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
    const rgx1 = /[^a-z.\s]/i;
    const rgx2 = /[a-z.\s]{25}/i;
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard
    if (rgx1.test(inp)) {
        span[0].innerText = "Name CANNOT contain numbers or special characters";
        span[0].style.color = "tomato";
        evt.preventDefault(); //to lock numeric and special char input
    } else
    if (rgx2.test(uname.value)) {
        evt.preventDefault();
    }
    if ((evt.keyCode || evt.charCode) === 8) {
        evt.allowDefault();
    }
}


uname.onkeyup = function(evt) {
    const rgx1 = /[a-z.\s]{3,}/i;
    if (uname.value === "") {
        span[0].innerText = "Name CANNOT remain BLANK";
        span[0].style.color = "yellow";
    } else if (!rgx1.test(uname.value)) {
        span[0].innerText = "Name must contain ATLEAST 3 characters";
        span[0].style.color = "tomato";
    } else {
        span[0].innerText = "VALID Name";
        span[0].style.color = "lime";
    }
}

//validate email
email.onkeypress = function(evt) {
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard
    const rgx1 = /[^\.\_a-z0-9@]/;
    const rgx2 = /[A-Z]/;
    const rgx3 = /^([0-9]+)$/;
    const rgx4 = /[\.\_a-z0-9@]{35}/;
    const rgx5 = /@christuniversity.in$/;
    const rgx6 = /@mca.christuniversity.in$/;
    const rgx7 = /@mda.christuniversity.in$/;


    if (rgx4.test(email.value) || rgx5.test(email.value) || rgx6.test(email.value) || rgx7.test(email.value)) { //email cannot be more than 30 chars
        evt.preventDefault(); //to lock the keyboard
    }
    if (rgx2.test(inp)) {
        span[1].innerText = "Email Address is ALWAYS lowercase";
        span[1].style.color = "tomato";
        evt.preventDefault(); //to lock the keyboard
    }
    if (rgx1.test(inp)) {
        span[1].innerText = "Invalid Character entered";
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
    const rgx1 = /^([\.\_a-z0-9]+)@christuniversity.in$/;
    const rgx2 = /^([\.\_a-z0-9]+)@mca.christuniversity.in$/;
    const rgx3 = /^([\.\_a-z0-9]+)@mda.christuniversity.in$/;
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
phn.onkeypress = function(evt) {
    let inp = String.fromCharCode(evt.which);

    const rgx2 = /[^0-9]/;
    const rgx3 = /[0-9\b]{10}/;
    if (rgx3.test(phn.value)) {
        span[2].innerText = "Valid Phone number";
        span[2].style.color = "lime";
        evt.preventDefault();
    } else if (rgx2.test(inp)) {
        span[2].innerText = "Phone Number can contain numbers ONLY";
        span[2].style.color = "tomato";
        evt.preventDefault();
    } else {
        span[2].innerText = "Invalid Phone number";
        span[2].style.color = "tomato";
    }
}

phn.onkeyup = function() {
    const rgx1 = /^[0-9]{8,10}$/;
    if (phn.value === "") {
        span[2].innerText = "Phone Number CANNOT remain BLANK";
        span[2].style.color = "yellow";
    }
    if (rgx1.test(phn.value)) {
        span[2].innerText = "Valid Phone number";
        span[2].style.color = "lime";
    }
}

//validate password
pass.onkeypress = function() {

    //if (cpass.value === pass.value) {
    //    span[4].innerText = "Passwords match";
    //    span[4].style.color = "lime";
    //}
}
pass.onkeyup = function() {
    const rgx1 = /[a-z]/;
    const rgx2 = /[A-Z]/;
    const rgx3 = /[0-9]/;
    const rgx4 = /[~`!@#\$%\^&*()-_+={}[\]|\;:"<>,.\/\?]{2,}/;
    const rgx5 = /\B[a-z]{4,}/i;
    const rgx6 = /\B[0-9]{2,}/;

    if ((rgx1.test(pass.value) && rgx2.test(pass.value) && rgx3.test(pass.value)) && rgx4.test(pass.value) && (pass.value.length + 1 > 8)) {
        span[3].innerText = "Strong Password";
        span[3].style.color = "yellow";
        if (rgx5.test(pass.value) && rgx6.test(pass.value) && (pass.value.length + 1 > 12)) {
            span[3].innerText = "Hard to guess";
            span[3].style.color = "lime";
        }
    } else {
        span[3].innerText = "Weak Password";
        span[3].style.color = "tomato";
    }
    if (cpass.value === pass.value) {
        span[4].innerText = "Passwords match";
        span[4].style.color = "lime";
    } else {
        span[4].innerText = "Passwords do not match";
        span[4].style.color = "tomato";
    }
    if (pass.value === "") {
        span[3].innerText = "Password CANNOT remain BLANK";
        span[3].style.color = "yellow";
    }
}

//validate confirm password
cpass.onkeyup = function() {
    if (cpass.value === "") {
        span[4].innerText = "Confirm Password CANNOT remain BLANK"
        span[4].style.color = "yellow"
    } else if (cpass.value === pass.value) {
        span[4].innerText = "Passwords match";
        span[4].style.color = "lime";
    } else {
        span[4].innerText = "Passwords do not match";
        span[4].style.color = "tomato";
    }
}

//validate address
addrs.onkeypress = function(evt) {
    if ((evt.keyCode || evt.charCode) === 8) {
        evt.allowDefault();
    }
    if (addrs.value.length + 1 >= 130) {
        evt.preventDefault();
    }
}

//addrs.onkeyup = function(evt) {
//    if (0 < addrs.value.length + 1 === 50) {
//        evt.preventDefault();
//    }
//}