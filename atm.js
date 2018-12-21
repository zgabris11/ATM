var user1 = {
    userCheckBalance: 500.00,
    cardNum: "123456",
    pinNum: "1234",
    userName: "Z"
}
var counter = 0
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonThree = document.getElementById("buttonThree");
var buttonFour = document.getElementById("buttonFour");
var depositMoney = document.getElementById("depositMoney");
var activeUser = false;


function processing(action) {
    if (counter === 0 && action === "enter") {
        checkCardNum();
        counter++
    } else if (counter === 1 && action === "enter") {
        checkPinNum();
        counter ++
    } else if (counter === "deposit" && action === "enter") {
        user1.userCheckBalance += Number(document.getElementById("depositMoney").value);
        depositFunction();
    } else if (action === "cancel") {
        counter = "home"
        checkPinNum();
    }
}
function cardPad(element) {
   if (counter == 0) {
       document.getElementById("cardNumber").value = document.getElementById("cardNumber").value + element.value;
   } else if (counter === 1) {
       document.getElementById("pinNumber").value = document.getElementById("pinNumber").value + element.value;
   } else if (counter === "deposit") {
       user1.userCheckBalance += document.getElementById("depositMoney").value;
       console.log("Caught")
       counter = 1
   }
}

function checkCardNum() {
   cardCheck = document.getElementById("cardNumber").value;
   if (cardCheck !== user1.cardNum) {
       document.getElementById("display").innerHTML = "Error: invalid card number.";
   } else {
       document.getElementById("display").innerHTML = "Welcome back " + user1.userName + " !";
       document.getElementById("pinText").innerHTML = "Please enter your PIN number";
       cardNumber.style.display = "none";
       pinNumber.style.display = "inline-block";
   }
}

function checkPinNum() {
    pinCheck = document.getElementById("pinNumber").value;
    if (pinCheck !== user1.pinNum) {
        document.getElementById("pinText").innerHTML = "Error: Your pin number is incorrect.";
    } else if (counter === "home" && activeUser == true) {
        document.getElementById("display3").innerHTML = '';
        depositMoney.style.display = "none";
        twenty.style.display = "none";
        forty.style.display = "none";
       sixty.style.display = "none";
       eighty.style.display = "none";
        document.getElementById("display").innerHTML = "Choose an option";
        document.getElementById("display").style.display = "block";
        pinText.style.display = "none";
        pinNumber.style.display = "none";
        fastCash.style.display = "inline-block";
        checkAccount.style.display = "inline-block";
        deposit.style.display = "inline-block";
        buttonOne.onclick = function() {fastCashFunction()};
        buttonTwo.onclick = function() {depositFunction()};
        buttonThree.onclick = function() {checkAccountFunction()};
    } else {
        document.getElementById("display").innerHTML = "Choose an option";
        pinText.style.display = "none";
        pinNumber.style.display = "none";
        fastCash.style.display = "inline-block";
        checkAccount.style.display = "inline-block";
        deposit.style.display = "inline-block";
        buttonOne.onclick = function() {fastCashFunction()};
        buttonTwo.onclick = function() {depositFunction()};
        buttonThree.onclick = function() {checkAccountFunction()};
        activeUser = true;
    }
}

function fastCashFunction() {  
    document.getElementById("display").innerHTML = "Your account balance is " + user1.userBalance + " ! Choose an option to widthdraw from your account.";
    twenty.style.display = "inline-block";
    forty.style.display = "inline-block";
   sixty.style.display = "inline-block";
   eighty.style.display = "inline-block";
   fastCash.style.display = "none";
   checkAccount.style.display = "none";
   deposit.style.display = "none";
   buttonOne.onclick = null;
   buttonTwo.onclick = null;
   buttonThree.onclick = null;
   buttonOne.onclick = function() {twentyFunction()};
   buttonTwo.onclick = function() {fortyFunction()};
   buttonThree.onclick = function() {sixtyFunction()};
   buttonFour.onclick = function() {eightyFunction()};
}
function twentyFunction() {
   document.getElementById("display3").innerHTML = "Your checking account balance is " + user1.userCheckBalance + " ! Choose an option to widthdraw from your account.";
   user1.userCheckBalance = user1.userCheckBalance - 20;
   display.style.display = "none";
}

function fortyFunction() {
   document.getElementById("display3").innerHTML = "Your checking account balance is " + user1.userCheckBalance + " ! Choose an option to widthdraw from your account.";
   user1.userCheckBalance = user1.userCheckBalance - 40;
   display.style.display = "none";
   display2.style.display = "none";
   depositMoney.style.display = "none";
}

function sixtyFunction() {
   document.getElementById("display3").innerHTML = "Your checking account balance is " + user1.userCheckBalance + " ! Choose an option to widthdraw from your account.";
   user1.userCheckBalance = user1.userCheckBalance - 60;
   display.style.display = "none";
}

function eightyFunction() {
   document.getElementById("display3").innerHTML = "Your checking account balance is " + user1.userCheckBalance + " ! Choose an option to widthdraw from your account.";
   user1.userCheckBalance = user1.userCheckBalance - 80;
   display.style.display = "none";
}

function depositFunction() {
    var depositCash = parseInt(document.getElementById("depositMoney").value);
    document.getElementById("display3").innerHTML = "You have " + user1.userCheckBalance + " in your account. How much would you like to deposit?";  
    fastCash.style.display = "none";
    checkAccount.style.display = "none";
    deposit.style.display = "none";
    display.style.display = "none";
    depositMoney.style.display = "block";
    counter = "deposit"
}

function checkAccountFunction() {
   document.getElementById("display2").innerHTML = "Your balance is " + user1.userCheckBalance + " !";
   fastCash.style.display = "none";
   checkAccount.style.display = "none";
   deposit.style.display = "none";
   display.style.display = "none";
}