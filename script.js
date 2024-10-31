const number = document.getElementById("number");
const btnSubmit = document.getElementById("btn-submit");
const message = document.getElementById("message");
const inputedNumber = document.getElementById("inputed-number");
const countMessage = document.getElementById("count-message");
const btnNewGame = document.getElementById("btn-new-game");
const btnBack = document.getElementById("btn-back");
const alertCard = document.getElementById("alert-card");
const alertCardMsg = document.getElementById("alert-card-msg");
const alertCardTitle = document.getElementById("alert-card-title");
const alertBtnNewGame = document.getElementById("alert-btn-new-game");
const overlay = document.getElementById("overlay");
const randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 10;

btnSubmit.addEventListener("click", () => {
  const inputNumber = number.value;

  if (count == 1) {
    countMessage.innerHTML = "no more";
    message.innerHTML =
      "You Lose...🥲🥲🥲<br> Correct number is " + randomNumber;
    message.classList.add("text-danger");

    setTimeout(function () {
  
    
      // Show overlay and alert card
      overlay.classList.remove("d-none");
      alertCard.classList.remove("d-none");

      // Update message, title, and styling
      alertCardMsg.innerHTML = "ហ្គេមចឹងក៏លេងមិនឈ្នះដែរ?🙃";
      alertCardMsg.classList.add("text-danger");
      alertCardTitle.innerHTML = "You Lose";

      // Prevent background scroll
      document.body.style.overflow = "hidden";
    }, 1000);

    return;
  }

  if (isNaN(number.value)) {
    message.innerHTML += "<br>Please input a number";
    return;
  }
  if (number.value < 1 || number.value > 100) {
    message.innerHTML += "<br> Please input a number between 1 and 100";
    return;
  }

  count--;

  if (inputNumber == randomNumber) {
    if (count > 5) {
      message.innerHTML = "You Win... អបអរសាទរ ពូកែមែន😍🎉";
    } else if ((count) => 3) {
      message.innerHTML = "You Win...អបអរសាទរ គ្រាន់បើ😍🎉";
    } else {
      message.innerHTML = "You Win... ខ្មោចអោយទេនឹង😚🎉";
    }
    message.classList.add("text-warning");

    setTimeout(function () {
      overlay.classList.remove("d-none");
      alertCard.classList.remove("d-none");
      alertCardMsg.innerHTML = "អបអរសាទរ😍🎉";
      alertCardMsg.classList.add("text-warning");
      alertCardTitle.innerHTML = "You Win";
      document.body.style.overflow = "hidden";
    }, 1000);
    return;
  } else if (inputNumber > randomNumber) {
    message.innerHTML = "Your number is too high";
  } else {
    message.innerHTML = "Your number is too low";
  }
  inputedNumber.innerHTML += inputNumber + ", ";
  countMessage.innerHTML = count;
  number.value = "";
  if (count <= 5 && count > 3) {
    countMessage.classList.remove("text-success");
    countMessage.classList.add("text-warning");
  } else if (count <= 3) {
    countMessage.classList.remove("text-warning");
    countMessage.classList.add("text-danger");
  }
});

btnNewGame.addEventListener("click", function () {
  alert("New Game");
  window.location.reload();
});

btnBack.addEventListener("click", function () {
  var win = window.open(
    "",
    "_self"
  ); /* url = "" or "about:blank"; target="_self" */
  win.close();
});

alertBtnNewGame.addEventListener("click", () => {
  window.location.reload();
});
