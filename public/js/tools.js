const tools = [

{ name: "POS Charge Calculator", category:"Business", link: "/tools/pos.html" },

{ name: "Loan Calculator", category:"Finance", link: "/tools/loan.html" },

{ name: "Age Calculator", category:"Utility", link: "/tools/age.html" },

{ name: "Discount Calculator", category:"Shopping", link: "/tools/discount.html" },

{ name: "BMI Calculator", category:"Health", link: "/tools/bmi.html" },

{ name: "Dollar to Naira Converter", category:"Finance", link: "/tools/currency.html" },

{ name: "Data Profit Calculator", category:"Business", link: "/tools/data-profit.html" },

{ name: "Electricity Token Calculator", category:"Utility", link: "/tools/electricity.html" },

{ name: "WAEC Grade Calculator", category:"Education", link: "/tools/waec.html" },

{ name: "Unit Converter", category:"Utility", link: "/tools/unit.html" }

];

const container = document.getElementById("toolGrid");

function displayTools(list){

container.innerHTML = "";

list.forEach(tool => {

const card = document.createElement("a");

card.href = tool.link;
card.className = "tool-card";

card.innerHTML = `
<strong>${tool.name}</strong><br>
<small>${tool.category}</small>
`;

container.appendChild(card);

});

}

function searchTools(){

const search = document.getElementById("search").value.toLowerCase();

const filtered = tools.filter(tool =>
tool.name.toLowerCase().includes(search)
);

displayTools(filtered);

}

displayTools(tools);
