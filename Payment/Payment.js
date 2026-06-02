const plan = localStorage.getItem("plan");
const price = localStorage.getItem("price");

document.querySelector(".Plan").textContent = plan;
document.querySelector(".Price").textContent = price;

const forms = document.querySelector("form");

forms.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = forms.querySelector('input[type="radio"]:checked').value;
  console.log(value);
});
