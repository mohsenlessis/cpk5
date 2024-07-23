var plus = document.querySelectorAll(".fa-plus-circle");
console.log(plus);
// for(var i =0; i< plus.length; i++) {
//     plus[i].addEventListener("click", function(event) {

//     })
// }
plus.forEach((element, index) => {
  element.addEventListener("click", function () {
    var quantity = document.querySelectorAll(".quantity")[index];
    console.log(quantity.textContent);
    quantity.textContent = parseInt(quantity.textContent) + 1;
    updatePrice();
  });
});
var moin = document.querySelectorAll(".fa-minus-circle");

moin.forEach((element, index) => {
  element.addEventListener("click", function () {
    var quantity = document.querySelectorAll(".quantity")[index];
    console.log(quantity.textContent);
    quantity.textContent = parseInt(quantity.textContent) - 1;
    updatePrice();
  });
});
var likes = document.querySelectorAll(".fa-heart");
likes.forEach((elem) => {
  elem.addEventListener("click", function () {
    if (elem.style.color !== "red") elem.style.color = "red";
    else {
      elem.style.color = "black";
    }
  });
});
document.querySelectorAll(".fa-trash-alt").forEach((elem, index) => {
  elem.addEventListener("click", function () {
    let card = document.querySelector(".list-products");
    let cartItem = document.querySelectorAll(".list-products > .card-body")[
      index
    ];
    card.removeChild(cartItem);
    updatePrice();
  });
});
function updatePrice() {
  var prices = document.querySelectorAll(".unit-price");
  var quantities = document.querySelectorAll(".quantity");
  var total = 0;
  prices.forEach((price, index) => {
    const priceValue = parseFloat(price.textContent.replace("$", ""));
    const quantityValue = parseInt(quantities[index].textContent);
    total += priceValue * quantityValue;
  });
  document.querySelector(".total").textContent = total + " $";
}
