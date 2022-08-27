
        function eva() {

            let excellentq1 = document.getElementById("excellentq1")
            let goodq1 = document.getElementById("goodq1")
            let poorq1 = document.getElementById("poorq1")


            let excellentq2 = document.getElementById("excellentq2")
            let goodq2 = document.getElementById("goodq2")
            let poorq2 = document.getElementById("poorq2")

            let excellentq3 = document.getElementById("excellentq3")
            let goodq3 = document.getElementById("goodq3")
            let poorq3 = document.getElementById("poorq3")


            let excellentq4 = document.getElementById("excellentq4")
            let goodq4 = document.getElementById("goodq4")
            let poorq4 = document.getElementById("poorq4")


            let excellentq5 = document.getElementById("excellentq5")
            let goodq5 = document.getElementById("goodq5")
            let poorq5 = document.getElementById("poorq5")


            let excellentq6 = document.getElementById("excellentq6")
            let goodq6 = document.getElementById("goodq6")
            let poorq6 = document.getElementById("poorq6")


            let excellentq7 = document.getElementById("excellentq7")
            let goodq7 = document.getElementById("goodq7")
            let poorq7 = document.getElementById("poorq7")


            let excellentq8 = document.getElementById("excellentq8")
            let goodq8 = document.getElementById("goodq8")
            let poorq8 = document.getElementById("poorq8")


            let excellentq9 = document.getElementById("excellentq9")
            let goodq9 = document.getElementById("goodq9")
            let poorq9 = document.getElementById("poorq9")

            let name = document.getElementById('name').value;




            const users = JSON.parse(localStorage.getItem(`${name}`))


            if (localStorage.getItem((`${name}`)) == undefined) {
                return false

            }


            // quesone number 2##############################

            if (users[0]["quesone"] == "Excellent") {
                document.getElementById("excellentq1").style.display = "block";
                document.getElementById("excellentq1").style.color = "green"


            }

            if (users[0]["quesone"] == "Good") {
                document.getElementById("goodq1").style.display = "block";
                document.getElementById("goodq1").style.color = "orange "


            }
            if (users[0]["quesone"] == "poor") {
                document.getElementById("poorq1").style.display = "block";
                document.getElementById("poorq1").style.color = "red"

            }


            // quesone number 2##############################

            if (users[0]["questwo"] == "Excellent") {

                document.getElementById("excellentq2").style.display = "block";
                document.getElementById("excellentq2").style.color = "green"



            }

            if (users[0]["questwo"] == "Good") {
                document.getElementById("goodq2").style.display = "block";
                document.getElementById("goodq2").style.color = "orange"

            }

            if (users[0]["questwo"] == "Poor") {

                document.getElementById("poorq2").style.display = "block";
                document.getElementById("poorq2").style.color = "red"

            }


            // quesone number 3 ##############################

            if (users[0]["questhree"] == "Excellent") {

                document.getElementById("excellentq3").style.display = "block";
                document.getElementById("excellentq3").style.color = " green"



            }

            if (users[0]["questhree"] == "Good") {
                document.getElementById("goodq3").style.display = "block";
                document.getElementById("goodq3").style.color = "orange "

            }

            if (users[0]["questhree"] == "Poor") {

                document.getElementById("poorq3").style.display = "block";
                document.getElementById("poorq3").style.color = "red"

            }


            // quesone number 4 ##############################

            if (users[0]["quesfour"] === "Excellent") {
                document.getElementById("excellentq4").style.display = "block";
                document.getElementById("excellentq4").style.color = " green"

                // return true;

            }

            if (users[0]["quesfour"] === "Good") {
                document.getElementById("goodq4").style.display = "block";
                document.getElementById("goodq4").style.color = " orange "
                //  return false;
            }
            if (users[0]["quesfour"] == "Poor") {

                document.getElementById("poorq4").style.display = "block";
                document.getElementById("poorq4").style.color = " red"
                // return false;
            }



            //     // quesone number  5  ##############################

            if (users[0]["quesfive"] == "Excellent") {
                document.getElementById("excellentq5").style.display = "block";
                document.getElementById("excellentq5").style.color = " green"

                // return true;

            }

            if (users[0]["quesfive"] == "Good") {
                document.getElementById("goodq5").style.display = "block";
                document.getElementById("goodq5").style.color = " orange "
                //  return false;
            }
            if (users[0]["quesfive"] == "Poor") {

                document.getElementById("poorq5").style.display = "block";
                document.getElementById("poorq5").style.color = " red"
                // return false;
            }



            //     // quesone number  6  ##############################

            if (users[0]["quessix"] == "Excellent") {
                document.getElementById("excellentq6").style.display = "block";
                document.getElementById("excellentq6").style.color = " green"



            }

            if (users[0]["quessix"] == "Good") {
                document.getElementById("goodq6").style.display = "block";
                document.getElementById("goodq6").style.color = "orange "

            }

            if (users[0]["quessix"] == "Poor") {

                document.getElementById("poorq6").style.display = "block";
                document.getElementById("poorq6").style.color = " red"

            }




            //     // // quesone number  7 ##############################

            if (users[0]["quesseven"] == "Excellent") {
                document.getElementById("excellentq7").style.display = "block";
                document.getElementById("excellentq7").style.color = " green"



            }

            if (users[0]["quesseven"] == "Good") {
                document.getElementById("goodq7").style.display = "block";
                document.getElementById("goodq7").style.color = " orange "

            }

            if (users[0]["quesseven"] == "Poor") {

                document.getElementById("poorq7").style.display = "block";
                document.getElementById("poorq7").style.color = " red"

            }



            //     // // quesone number  8 ##############################

            if (users[0]["queseight"] == "Excellent") {
                document.getElementById("excellentq8").style.display = "block";
                document.getElementById("excellentq8").style.color = " green"



            }

            if (users[0]["queseight"] == "Good") {
                document.getElementById("goodq8").style.display = "block";
                document.getElementById("goodq8").style.color = " orange "

            }

            if (users[0]["queseight"] == "Poor") {

                document.getElementById("poorq8").style.display = "block";
                document.getElementById("poorq8").style.color = " red"

            }




            //     // // quesone number  9 ##############################

            if (users[0]["quesnine"] == "Excellent") {
                document.getElementById("excellentq9").style.display = "block";
                document.getElementById("excellentq9").style.color = " green"


            }

            if (users[0]["quesnine"] == "Good") {
                document.getElementById("goodq9").style.display = "block";
                document.getElementById("goodq9").style.color = " orange "

            }

            if (users[0]["quesnine"] == "Poor") {
                document.getElementById("poorq9").style.display = "block";
                document.getElementById("poorq9").style.color = " red"

            }
        }

        function clear() {
            //     window.location.replace("./land.html")
            // setTimeout(function(){location.replace('./eva.html');} , 300);
            // localStorage.clear();

        }


