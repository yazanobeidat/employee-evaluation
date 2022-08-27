
function valid() {

    var email = document.getElementById("exampleInputEmail1").value;
    
    var password = document.getElementById("exampleInputPassword1").value;
    
    if (!isFormValid(email, password)) {
    return
    }
    
    
    if (validate_user(email, password)) {
    
    setTimeout(function () { location.replace("eva.html"); }, 500);
    
    
    window.location.replace("eva.html")
    
    // window.open('./test.html')
    
    
    
    // location.replace("./index.html")
    
    }
    else {
    alert("user name or password is invalid")
    }
    
    }// end valid method
    
    
    
    function validate_user(email, password) {
    if (localStorage.getItem("users") == undefined) {
    return false
    }
    
    
    const users = JSON.parse(localStorage.getItem("users"))
    
    for (let i = 0; i < users.length; i++) {
    
    const user = users[i]
    
    if (user["email"] == email && user["password"] == password) {
        return true
        // user found
    }
    }
    
    return false // user not found
    
    }
    
    function isFormValid(email, password) {
    
    
    var message1 = document.getElementById("emailtext");
    
    var message3 = document.getElementById("passtext");
    
    var badColor = "#ff6666";
    
    let isvalid = true
    
    if (email == "") {
    message1.innerHTML = "The email must be a valid email address.";
    
    document.getElementById("exampleInputEmail1").style.border =
        "2px solid red";
    isvalid = false
    }
    
    if (password.length < 6) {
    message3.innerHTML = "The password field is required.";
    
    document.getElementById("exampleInputPassword1").style.border =
        "2px solid red";
    isvalid = false
    }
    
    if (password.length > 6 && password.length < 18) {
    message3.innerHTML = "good";
    
    }
    return isvalid
    }