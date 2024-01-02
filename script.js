// let rateValue = document.getElementById("rate_val");
// let rate = document.getElementById("rate");
function compute() {
  // p = document.getElementById("principal").value;
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years);
  var interest = (principal * years * rate) / 100;
  var amount = parseInt(principal) + parseFloat(interest);
  var result = document.getElementById("result");
  if (principal <= 0) {
    alert("Please enter a positive number!");
    document.getElementById("principal").focus();
  } else {
    result.innerHTML =
      "If you deposit $" +
      "<mark>" +
      principal +
      "</mark>" +
      ",<br> at an interest rate of " +
      "<mark>" +
      rate +
      "%" +
      "</mark>" +
      "<br> You will receive an amount of $" +
      "<mark>" +
      amount +
      "</mark>" +
      ",<br> in the year " +
      "<mark>" +
      year +
      "</mark>" +
      "<br>";
    //   result.innerText = amount;
  }
}

// rate.addEventListener("input", () => (rateValue.innerText = rate.value));

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
