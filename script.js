// select form and message section
const form = document.getElementById("bookingForm");
const messageBox = document.querySelector(".message");

function showMessage() {

    const name = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const gender = form.querySelector('input[name="gender"]:checked');
    window.location.href = "BookFlight.html";

    // validation
    if(name === ""){
        alert("Please enter your name");
        return;
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters");
        return;
    }

    if(!gender){
        alert("Please select your gender");
        return;
    }

    // show success message on page
    messageBox.innerHTML = `
        <h3>✈ Booking Confirmed!</h3>
        <p>Happy Journey, <b>${name}</b> ❤️</p>
    `;

    messageBox.style.background = "rgba(0,0,0,0.6)";
    messageBox.style.padding = "15px";
    messageBox.style.borderRadius = "10px";
    messageBox.style.marginTop = "20px";

    // clear form
    form.reset();
}