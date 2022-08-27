// document.getElementById('B1').onclick = function () { Validation()}
function valid() {
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var fname = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var message2 = document.getElementById("text1")
    var message4 = document.getElementById("text2")
    var message1 = document.getElementById("emailtext");
    var message3 = document.getElementById("passtext");
    var badColor = "#ff6666";


    if (fname == "") {
        message2.innerHTML = "Please enter first name";
        document.getElementById("firstName").style.border = "2px solid red"

    }
    if (lName == "") {
        message4.innerHTML = "Please enter last name";
        document.getElementById("lastName").style.border = "2px solid red"

    }


    if (email == "") {
        message1.innerHTML = "The email must be a valid email address."

        document.getElementById("exampleInputEmail1").style.border = "2px solid red"
    }


    if (password.length < 6) {
        message3.innerHTML = "The password field is required."

        document.getElementById("exampleInputPassword1").style.border = "2px solid red"
    }




    if (password.length > 18) {
        message3.innerHTML = "The Password should be between 6-18 characters."

        document.getElementById("exampleInputPassword1").style.border = "2px solid red"
    }
    if (password.length > 6 && password.length < 18) {


        message3.innerHTML = "good"
    }


    if (email !== "" && password.length > 6 && password.length < 18) {
        //    window.localStorage.setItem("email" , email );
        //    window.localStorage.setItem("password" , password)

        let array_form = []


        if (localStorage["users"] !== undefined) {

            array_form = JSON.parse(localStorage.getItem("users"))
        }

        let user = { "email": email, "password": password ,"fname":fname}

        array_form.push(user)

        localStorage.setItem("users", JSON.stringify(array_form))





    }
}