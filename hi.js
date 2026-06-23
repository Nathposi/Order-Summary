const option = document.querySelector(".options");
const price = document.querySelector(".light");
option.addEventListener("click", function (e) {
  if (option.value === "Annual Plan") {
    price.textContent = "$59.99/year";
  } else if (option.value === "Quaterly Plan") {
    price.textContent = "$19.99/3 mths";
  } else if (option.value === "Monthly Plan") {
    price.textContent = "$5.99/month";
  } else if (option.value === "Weekly Plan") {
    price.textContent = "$1.99/week";
  }

  localStorage.setItem("plan", option.value);
  localStorage.setItem("price", price.textContent);
});

const cancel = document.querySelector(".no a");
cancel.addEventListener("click", function (e) {
  if (confirm("You really want to cancel ?")) {
    alert("Cancel Confirmed");
  } else {
    alert("Cancel aborted");
  }
});
