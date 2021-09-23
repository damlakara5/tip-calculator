"use strict";
let bill = document.querySelector(".bill-value");
let peopleNumber = document.querySelector(".people-number");
let custom = document.querySelector(".btn-6");
let tipPercentage = document.querySelectorAll(".btn");
let hidden = document.querySelectorAll(".hidden");
let tipAmount = document.querySelector(".tipAmount");
let total = document.querySelector(".total");
let reset = document.querySelector(".reset");
let btn;
for (let i = 0; i < tipPercentage.length; i++) {
  tipPercentage[i].addEventListener("click", function (event) {
    btn = event.target;
  });
}
function getValue() {
  if (peopleNumber.value === "0") {
    document.querySelector(".error-2").classList.remove("hidden");
  } else {
    document.querySelector(".error-2").classList.add("hidden");
  }
  if (bill.value === "0") {
    document.querySelector(".error-1").classList.remove("hidden");
  } else {
    document.querySelector(".error-1").classList.add("hidden");
  }
  if (peopleNumber.value !== "" && bill.value !== "") {
    for (let i = 0; i < tipPercentage.length; i++) {
      tipPercentage[i].addEventListener("click", function (event) {
        btn = event.target;
        let tip = btn.textContent.slice(0, -1);
        let peopleNumberNum = Number(peopleNumber.value);
        let totalValue =
          Number(bill.value) +
          (Number(bill.value) * (tip / 100)) / peopleNumberNum;
        total.textContent = `$${Number(totalValue).toFixed(2)}`;
      });
    }
  }

  if (custom.value !== "" && peopleNumber.value !== "" && bill.value !== "") {
    let tip = Number(custom.value);
    let peopleNumberNum = Number(peopleNumber.value);
    let totalValue =
      Number(bill.value) + (Number(bill.value) * (tip / 100)) / peopleNumberNum;
    total.textContent = `$${Number(totalValue).toFixed(2)}`;
  }
}

reset.addEventListener("click", function () {
  bill.value = peopleNumber.value = custom.value = "";
  total.textContent = tipAmount.textContent = `$0.00`;
});
