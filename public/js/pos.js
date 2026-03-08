function calculate(){

let amount = document.getElementById("amount").value;

let charge = 0;

if(amount <= 5000){
charge = 50;
}
else if(amount <= 10000){
charge = 100;
}
else{
charge = amount * 0.01;
}

let total = parseFloat(amount) + charge;

document.getElementById("result").innerHTML =
"Charge: ₦" + charge + "<br>Total: ₦" + total;

}
