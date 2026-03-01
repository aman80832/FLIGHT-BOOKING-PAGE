function bookFlight(){

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message");
    window.location.href = "payments.html"; 

    if(name === ""){
        alert("Please enter passenger name");
        return;
    }

    if(age === "" || age <= 0){
        alert("Please enter valid age");
        return;
    }

    if(!gender){
        alert("Please select gender");
        return;
    }

    message.innerHTML = "✈ Flight Booked Successfully! Happy Journey ";
}