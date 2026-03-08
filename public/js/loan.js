function calculateLoan(){

let amount = document.getElementById("amount").value;
let rate = document.getElementById("rate").value;
let months = document.getElementById("months").value;

let interest = (amount * rate / 100) * months;

let total = parseFloat(amount) + interest;

let monthly = total / months;

document.getElementById("result").innerHTML =
"Monthly Payment: ₦" + monthly.toFixed(2) +
"<br>Total Payment: ₦" + total.toFixed(2);

}
