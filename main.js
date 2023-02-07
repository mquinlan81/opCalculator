let currentVal = '';
let perviousVal = '';
let operator = '';

const numbers = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');
const equals = document.querySelector('#equals');
const backSpace = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const pervious = document.querySelector('#previous');
const current = document.querySelector('#current');

clear.addEventListener('click', function(e) {
  currentVal = '';
  previousVal = '';
  operator = '';
  current.textContent = '';
  pervious.textContent = '';
})

backSpace.addEventListener('click', function(e) {
  currentVal = currentVal.slice(0, -1)
  current.textContent = currentVal
})

numbers.forEach((number) => number.addEventListener('click', function(e) {
  getNumbers(e.target.textContent);
  current.textContent = currentVal;
}))

operators.forEach((ops) => ops.addEventListener('click', function(e) {
  getOperator(e.target.textContent);
}))

equals.addEventListener('click', function() {
  if (currentVal !== '' && previousVal !== '') {
    calculate();
  }
})

function getNumbers(num){
  if (currentVal.length <= 19) {
    currentVal += num;
  }
}

function getOperator(op) {
  operator = op;
  pervious.textContent = `${currentVal} ${op}`
  current.textContent = '';
  previousVal = currentVal
  currentVal = '';
}

function calculate() {
  switch (operator) {
    case '+':
      previous.textContent = `${previousVal} ${operator} ${currentVal}`
      currentVal = parseFloat(previousVal) + parseFloat(currentVal);
      current.textContent = currentVal;
      break;
    case '-':
      previous.textContent = `${previousVal} ${operator} ${currentVal}`
      currentVal = parseFloat(previousVal) - parseFloat(currentVal);
      current.textContent = currentVal;
      break;
    case '*':
      previous.textContent = `${previousVal} ${operator} ${currentVal}`
      currentVal = parseFloat(previousVal) * parseFloat(currentVal);
      current.textContent = currentVal;
      break;
    case '÷':
      previous.textContent = `${previousVal} ${operator} ${currentVal}`
      currentVal = parseFloat(previousVal) / parseFloat(currentVal);
      current.textContent = currentVal;
      break;
  }
}