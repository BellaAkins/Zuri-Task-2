document.getElementById("first").oninput = () => {
  document.getElementById("one").innerText =
    document.getElementById("first").value;
  first.value = first.value.replace(/[^0-9]/g, "");
};

document.getElementById("second").oninput = () => {
  document.getElementById("two").innerText =
    document.getElementById("second").value;
  second.value = second.value.replace(/[^0-9]/g, "");
};

document.getElementById("third").oninput = () => {
  document.getElementById("three").innerText =
    document.getElementById("third").value;
  third.value = third.value.replace(/[^0-9]/g, "");
};

document.getElementById("fourth").oninput = () => {
  document.getElementById("four").innerText =
    document.getElementById("fourth").value;
  fourth.value = fourth.value.replace(/[^0-9]/g, "");
};

const holder = document.querySelector(".card-holder-input");
const holderName = document.querySelector(".card-holder-name");

holder.oninput = () => {
  holderName.innerText = holder.value;
};

document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".year-input").value;
};

const first = document.getElementById("first");
const logo = document.getElementById("logo");

first.addEventListener("input", function () {
  const inputValue = first.value;
  //Changing Card Logo based on input

  changeCardLogo(inputValue);
});

function changeCardLogo(inputValue) {
  if (inputValue.startsWith("5") || inputValue.startsWith("2")) {
    logo.src = "mastercard.png";
  } else if (inputValue.startsWith("4")) {
    logo.src = "visa.png";
  } else if (inputValue.startsWith("3")) {
    logo.src = "amex.png";
  }
}

const btn = document.querySelector(".submit-btn");
btn.addEventListener("submit", alertPayment);

function alertPayment() {
  alert("Your payment was successful");
}
