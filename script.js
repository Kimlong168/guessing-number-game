
const number = document.getElementById("number");
const btnSubmit = document.getElementById("btn-submit");
const message = document.getElementById("message");
const inputedNumber = document.getElementById("inputed-number");  
const countMessage = document.getElementById("count-message");
const btnNewGame = document.getElementById("btn-new-game");
const alertCard = document.getElementById('alert-card');
const alertCardMsg = document.getElementById('alert-card-msg');
const alertCardTitle = document.getElementById('alert-card-title');
const alertBtnNewGame = document.getElementById('alert-btn-new-game');
const randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 10;

btnSubmit.addEventListener("click", () => {
  const inputNumber = number.value;
  
  if(count==1){
    countMessage.innerHTML = "no more";
    message.innerHTML = "You Lose... កាកឆុយម៉ាយហើយ​​​ <br> Correct number is " + randomNumber;
    message.classList.add("text-danger");

  

    setTimeout(function(){
      // alert("You Lose... កាកឆុយម៉ាយហើយ");
      alertCard.classList.remove("d-none");
      alertCardMsg.innerHTML = "កាកឆុយម៉ាយហើយ!!!";
      alertCardMsg.classList.add('text-danger');
      alertCardTitle.innerHTML ="You Lose";
      document.body.style.overflow="hidden";
    }, 3000);
    return;
  }

  if(isNaN(number.value)){
    message.innerHTML += "<br>Please input a number";
    return;
  }
  if(number.value<1 || number.value>100){
    message.innerHTML += "<br> Please input a number between 1 and 100";
    return;
  }

  count--;
 
  if (inputNumber == randomNumber) {
    if(count>5){
      message.innerHTML = "You Win... អបអរសាទរ ពូកែមែនកូនប៉ាៗ";
    }else if(count > 3){
      message.innerHTML = "You Win... គ្រាន់បើអាកូនប៉ា";
    }else{
      message.innerHTML = "You Win... ខ្មោចអោយទេហែងនឹង";
    }
    message.classList.add("text-warning");

    setTimeout(function(){
      alertCard.classList.remove("d-none");
      alertCardMsg.innerHTML = "អបអរសាទរ!!!";
      alertCardMsg.classList.add('text-warning');
      alertCardTitle.innerHTML ="You Win"
      document.body.style.overflow="hidden";
    }, 3000);
    return;

  } else if(inputNumber > randomNumber){
    message.innerHTML = "Your number is too high";
  }else{
    message.innerHTML = "Your number is too low";
  }
  inputedNumber.innerHTML += inputNumber + ", ";
  countMessage.innerHTML = count;
  number.value = "";
  if(count<=5 && count>3){
    countMessage.classList.remove("text-success");
    countMessage.classList.add("text-warning");
  }else if(count<=3){
    countMessage.classList.remove("text-warning");
    countMessage.classList.add("text-danger");
  }

});

btnNewGame.addEventListener("click", function(){
  alert("New Game");
  window.location.reload();
})

alertBtnNewGame.addEventListener("click",()=>{
  window.location.reload();
});

