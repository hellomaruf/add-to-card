let cards = document.querySelectorAll(".card");
let countNum = 1;
let totalPrice = 0;
for (const card of cards) {
  card.addEventListener("click", function () {
    //   access title and show
    let title = card.querySelector("h2").innerText;
    let showTitle = document.getElementById("title-container");
    let p = document.createElement("p");
    p.innerText = countNum + ". " + title;
    showTitle.appendChild(p);
    countNum++;
    // access price and  calculate then show total price
    let price = card.querySelector("span").innerText;
    let priceText = price.split(" ")[1];
    let priceInt = parseInt(priceText);
    totalPrice += priceInt;
    let showTotalPrice = document.getElementById("total-price");
    showTotalPrice.innerText = totalPrice;
  });
}

let applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function () {
  // show total price
  let discountInput = document.getElementById("discount-input");
  let discountInputValue = discountInput.value;
  let discountCoupon = discountInputValue.split(" ").join("").toUpperCase();
  // discount
  if (totalPrice >= 200) {
    if (discountCoupon === "SELL200") {
      let discountPrice = document.getElementById("discount-price");
      let discount = parseInt(totalPrice * 0.2);
      discountPrice.innerText = discount;
      document.getElementById("discount-input").value = "";

      // minus discounted price
      let afterDiscountPrice = totalPrice - discount;
      let totalDiscountPrice = document.getElementById("total-discount-price");
      totalDiscountPrice.innerText = afterDiscountPrice;
    }
  } else {
    let totalDiscountPrice = document.getElementById("total-discount-price");
    totalDiscountPrice.innerText = totalPrice;
  }
});
