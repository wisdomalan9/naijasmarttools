const tools = [

{ name: "POS Charge Calculator", link: "/tools/pos.html" },

{ name: "Loan Calculator", link: "/tools/loan.html" },

{ name: "Age Calculator", link: "/tools/age.html" },

{ name: "Discount Calculator", link: "/tools/discount.html" },

{ name: "BMI Calculator", link: "/tools/bmi.html" },

{ name: "Dollar to Naira Converter", link: "/tools/currency.html" },

{ name: "Data Profit Calculator", link: "/tools/data-profit.html" },

{ name: "Electricity Token Calculator", link: "/tools/electricity.html" },

{ name: "WAEC Grade Calculator", link: "/tools/waec.html" },

{ name: "Unit Converter", link: "/tools/unit.html" }

];

const container = document.getElementById("toolGrid");

tools.forEach(tool => {

const card = document.createElement("a");

card.href = tool.link;
card.className = "tool-card";
card.innerText = tool.name;

container.appendChild(card);

});
