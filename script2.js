// GET VALUES
const baseFare = document.getElementById("baseFare");
const taxes = document.getElementById("taxes");
const totalFare = document.getElementById("totalFare");
const payAmount = document.getElementById("payAmount");

// FUNCTION TO CALCULATE TOTAL
function calculateFare(){

    const base = parseInt(baseFare.textContent);
    const tax = parseInt(taxes.textContent);

    const total = base + tax;

    totalFare.textContent = total;
    payAmount.textContent = total;
}

// RUN ON PAGE LOAD
calculateFare();


// PAYMENT VALIDATION
document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    const method = document.querySelector('input[name="pay"]:checked');

    if(!method){
        alert("Please select a payment method");
        return;
    }

    alert("💳 Payment Successful ✈️\nYour ticket has been booked!");

    window.location.href = "ticket.html";

});