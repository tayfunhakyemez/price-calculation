/* Selected Elemets */

const selectedPrice = document.querySelector(".selected").dataset.price;
const selectedTitle = document.querySelector(".selected").dataset.title;
const selectButton = document.querySelector("#buttonValue");
const totalPrice = document.querySelector(".totalPrice");
const dropdown = document.querySelector(".dropdown");

// Dropdown List Function

dropdown.addEventListener("click", function (e) {
  if (dropdown.classList.contains("dropOpen")) {
    if (e.target.classList.contains("listItem")) {
      var target = e.target;
      target.classList.add("selected");
      var selectedPrice = target.dataset.price;
      var selectedTitle = target.dataset.title;
      var selectButton = (document.querySelector(
        "#buttonValue"
      ).value = selectedPrice);
      document.querySelector(".buttonTitle").innerHTML =
        selectedTitle +
        '<span class="buttonPrice">' +
        selectedPrice +
        "</span>";
      document.querySelector(".totalPrice").innerHTML = selectedPrice;
    }
    dropdown.classList.remove("dropOpen");
    dropdown.classList.add("dropClose");
  } else {
    dropdown.classList.add("dropOpen");
    dropdown.classList.remove("dropClose");
  }
  sumPrice();
});

// Checkbox Calculate Function
function sumPrice(price) {
  var dropValue = document.getElementById("buttonValue").value;
  var checkboxes = document.querySelectorAll(".checkbox");
  var checkboxSum = 0;
  for (i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      checkboxSum += parseInt(checkboxes[i].value);
    }
  }
  var sum = parseInt(dropValue) + parseInt(checkboxSum);
  totalPrice.innerHTML = sum;
}

// If anywhere is clicked
window.onclick = function (event) {
  if (!event.target.closest(".dropdown")) {
    if (dropdown.classList.contains("dropOpen")) {
      dropdown.classList.remove("dropOpen");
      dropdown.classList.add("dropClose");
    }
  }
};