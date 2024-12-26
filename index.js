const income = document.getElementById('income')
const remainder = document.getElementById("leftover");
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
let expense = 0
function addExpense(){
 const container = document.querySelector('.expense-container');
 const newRow = document.createElement('tr');
 const name = document.createElement('td')
 name.innerText = expenseName.value;
 newRow.appendChild(name)
 expense += parseFloat(expenseAmount.value)
 const amount = document.createElement('td');
 amount.innerText = "- "+ expenseAmount.value
 newRow.appendChild(amount)
 const leftover = document.createElement('td');
 leftover.innerText = income.value - expense;
 newRow.appendChild(leftover);
 container.appendChild(newRow);
 updateFields()
 updateLeftovers()
}
function updateFields(){
    expenseName.value = " ";
    expenseAmount.value = " ";
}
function updateLeftovers(){
    remainder.innerText =  income.value - expense
}
document.getElementById('income').addEventListener('input',updateLeftovers)

document.getElementById('btn').addEventListener('click',addExpense);