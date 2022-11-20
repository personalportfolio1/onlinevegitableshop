function payment()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var Address=document.getElementById('address').value;
    var City=document.getElementById('city').value;
    var State=document.getElementById('state').value;
    var Zipcode=document.getElementById('zipcode').value;

    var pattern1 = /^[a-zA-Z]{2}/;
    if (!name.match(pattern1)) {
        document.getElementById("name-err-msg").innerHTML = "* Please enter a valid Name.";
        return false;
    }

    if (email == '') {
        document.getElementById("email-err-msg").innerHTML = "* Please enter Email";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById("email-err-msg").innerHTML = "* Please enter  valid email";
        return false;
    }
    if (email.charAt(email.length - 4) != '.' && (email.charAt(email.length - 3)) != '.') {
        document.getElementById("email-err-msg").innerHTML = "* Please enter the valid emailId";
        return false;
    }

    if (!Address.match(pattern1)) {
        document.getElementById("address-err-msg").innerHTML = "* Please enter a Address.";
        return false;
    }

    if (!City.match(pattern1)) {
        document.getElementById("city-err-msg").innerHTML = "* Please enter a City";
        return false;
    }

    if(State=='') {
        document.getElementById("state-err-msg").innerHTML = "* Please enter a State";
        return false;
    }

    var pattern2=/^[0-9]{6}/;
    if (!Zipcode.match(pattern2)) {
        document.getElementById("zipcode-err-msg").innerHTML = "* Please enter a Zipcode";
        return false;
    }
}



// var emailvalue = document.getElementById('email').value;
// var passvalue = document.getElementById('password').value;
// if (emailvalue == '') {
//     document.getElementById("email-msg").innerHTML = "* Please enter Email";
//     return false;
// }
// if (emailvalue.indexOf('@') <= 0) {
//     document.getElementById("email-msg").innerHTML = "* Please enter  valid email";
//     return false;
// }
// if (emailvalue.charAt(emailvalue.length - 4) != '.' && (emailvalue.charAt(emailvalue.length - 3)) != '.') {
//     document.getElementById("email-msg").innerHTML = "* Please enter the valid emailId";
//     return false;
// }

// var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]){8,15}/;
// if (!passvalue.match(pattern)) {
//     document.getElementById("pass-err-msg").innerHTML = "* Please enter the valid password";
//     return false;
// }
// // return true;
// alert("Login Successfully!");