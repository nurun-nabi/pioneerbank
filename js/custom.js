

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
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
document.getElementById("currentDeposit").innerText=totalDeposit;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber
document.getElementById("currentBalance").innerText = totalBalance;
document.getElementById("depositAmount").value = " ";
});