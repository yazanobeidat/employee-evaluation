function show() {
    var x = document.getElementById("p1_text");

    x.style.display = "block";
}
function show1() {
    var x = document.getElementById("p2_text");

    x.style.display = "block";
}
function show2() {
    var x = document.getElementById("p3_text");

    x.style.display = "block";
}


function hide() {
    var x = document.getElementById("p1_text");
    x.style.display = "none";
}
function hide1() {
    var x = document.getElementById("p2_text");
    x.style.display = "none";
}
function hide2() {
    var x = document.getElementById("p3_text");
    x.style.display = "none";
}







function saveProfile() {
    var quesone = document.querySelector('input[name="recommed"]:checked').value;
    var questwo = document.querySelector('input[name="recommed2"]:checked').value;
    var questhree = document.querySelector('input[name="recommed3"]:checked').value;
    var quesfour = document.querySelector('input[name="recommed4"]:checked').value;
    var quesfive = document.querySelector('input[name="recommed5"]:checked').value;
    var quessix = document.querySelector('input[name="recommed6"]:checked').value;
    var quesseven = document.querySelector('input[name="recommed7"]:checked').value;
    var queseight = document.querySelector('input[name="recommed8"]:checked').value;
    var quesnine = document.querySelector('input[name="recommed9"]:checked').value;
    var select_name = document.getElementById('select_name').value;


    let array_form = []


    if (localStorage[select_name] !== undefined) {

        array_form = JSON.parse(localStorage.getItem(select_name))
    }


    let profile = {
        quesone: quesone,
        questwo: questwo,
        questhree: questhree,
        quesfour: quesfour,
        quesfive: quesfive,
        quessix: quessix,
        quesseven: quesseven,
        queseight: queseight,
        quesnine: quesnine,
        select_name: select_name
    }
    console.log(profile)

    array_form.push(profile)

    localStorage.setItem(select_name, JSON.stringify(array_form))
}


const namehr = JSON.parse(localStorage.getItem("users"))

for (let h = 0; h < namehr.length; h++) {

    const hr_name = namehr[h]
    console.log(hr_name["fname"])
    document.getElementById("nameHr").textContent = (hr_name["fname"]);
}

