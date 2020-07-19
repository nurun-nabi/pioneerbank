
//login button event create
const loginbtn = document.getElementById("loginbtn");
loginbtn.addEventListener("click", function(){
const login = document.getElementById("login")
login.style.display = "none";
const transaction = document.getElementById("transaction-area");
transaction.style.display = "block";
});

//deposit button event create
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
const depositNumber = getInputNumber("depositAmount");
updateSpanText("currentDeposit", depositNumber)
updateSpanText("currentBalance",depositNumber)

document.getElementById("depositAmount").value = " ";
});


//withdraw button event create
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
     const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1* withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber
    document.getElementById(id).innerText = totalAmount;
}