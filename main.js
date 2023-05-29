const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const sizesSelectElement = $$(".sizeBtn");
const colorBtnList = $$(".colorBtn");
const quantity = $(".quantity");
const quantityCart = $(".quantity-cart");
const totalMoneyElement = $("#totalMoney");
const addQuantifyBtn = $(".addQuantityBtn");
const quantityContainerElement = $(".quantity__container");

let count = localStorage.getItem("count") * 1 || 1;
let quantityCount = localStorage.getItem("quantity") * 1 || 0;
let totalMoney = localStorage.getItem("money") * 1 || 550000;
// HANDLE INITIAL
const handleInitial = () => {
  if (quantityCart) {
    quantityCart.innerHTML = count;
  }
  if (totalMoneyElement) {
    totalMoneyElement.textContent = totalMoney.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  }
  if (quantity) {
    quantity.innerHTML = quantityCount;
  }
};

handleInitial();
// HANDLE ADD QUANTITY
// HANDLE EVENT DOM
const handleEvent = () => {
  if (addQuantifyBtn) {
    addQuantifyBtn.onclick = () => {
      handleAddQuantity();
    };
  }
  if (quantityContainerElement) {
    quantityContainerElement.onclick = (e) => {
      if (window.location.href.indexOf("index") > -1) {
        // prevent default direct giohang
      }
      let quantityValue = quantity.textContent;
      if (quantityValue === "0") {
        alert("Vui lòng đặt hàng");
        e.preventDefault();
      }
    };
  }
};

handleEvent();
const handleAddQuantity = () => {
  if (quantity.textContent === "0") {
    quantity.innerHTML = 1;
    localStorage.setItem("quantity", 1);
    alert("Thêm vào giỏ hàng thành công!");
  } else {
    alert("Bạn đã thêm vào giỏ hàng trước đó!");
  }
};

// handle select size
const handleSelectSize = (elementList, className) => {
  elementList.forEach((item) => {
    item.onclick = (e) => {
      removeAllClassActive(elementList, className);
      item.classList.add(className);
    };
  });
};
function removeAllClassActive(elementList, className) {
  elementList.forEach((element) => {
    element.classList.remove(className);
  });
}

handleSelectSize(sizesSelectElement, "active");
handleSelectSize(colorBtnList, "active-border");
// Gio hang
function handleCartQuantity() {
  let value = quantity.textContent;
  value = quantityCart.value;
}

handleCartQuantity()
function increase() {
  if (quantityCart) quantityCart.innerHTML = ++count;

  handleLocalStorage();
  calcTotalMoney();
}
function decrease() {
  if (quantityCart) quantityCart.innerHTML = count > 1 ? --count : count;

  handleLocalStorage();
  calcTotalMoney();
}

const calcTotalMoney = () => {
  if ($(".money-first")) {
    const moneyText = $(".money-first").textContent;
    const money = moneyText.split(" ")[0] * 1;
    const total = money * count;
    totalMoneyElement.textContent = total.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    localStorage.setItem("money", total);
  }
};

const handleLocalStorage = () => {
  // QUANTITY
  localStorage.setItem("count", count);
};
function dathoantat() {
  alert("Bạn đã đặt thành công!");
}
