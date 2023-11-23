var income = document.getElementById("income");
var mybal = document.getElementById("my-balance");
var expense = document.getElementById("expense");

var text = document.getElementById("text-details");
var amount = document.getElementById("amount-sign");


function showHistory()
{
  var Hisbox = document.getElementById("history");
    Hisbox.innerHTML += `<div class="his">
                          <p> ${text.value} </p>              
                          <p> ${amount.value} </p>              
                          </div>`;

}




function newTrasaction() {
    let a = (text.value);
    let b = (amount.value);

    if (text.value == '' || amount.value == '') {
        alert("...........");
    }
    else if (parseInt(amount.value) > 0) {
        income.innerHTML = parseInt(income.textContent) + parseInt(amount.value);
        showHistory();
    }
    else {
        expense.innerHTML = parseInt(expense.textContent) - parseInt(amount.value);
    }
    mybal.innerHTML = parseInt(income.textContent) - parseInt(expense.textContent);
    text.value = '';
    amount.value = '';
    
}

const submit = document.getElementById("submit");

submit.addEventListener('click', newTrasaction)