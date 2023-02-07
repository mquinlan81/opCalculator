let currentVal = '';
let perviousVal = '';
let operator = '';

const numbers = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');
const equals = document.querySelector('#equals');
const negPos = document.querySelector('#negPos');
const percent = document.querySelector('#percent');
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

percent.addEventListener('click', function(e) {
  currentVal = currentVal / 100
  current.textContent = currentVal
})

negPos.addEventListener('click', function(e) {
  currentVal = currentVal * -1;
  current.textContent = currentVal
})

numbers.forEach((number) => number.addEventListener('click', function(e) {
  getNumbers(e.target.textContent);
  current.textContent = currentVal;
}))

decimal.addEventListener('click', function(){
  addDecimal()
})

operators.forEach((ops) => ops.addEventListener('click', function(e) {
  if (currentVal !== '') {
    getOperator(e.target.textContent);
    pervious.textContent = `${previousVal} ${operator}`
    current.textContent = currentVal;
  }
}))

equals.addEventListener('click', function() {
  console.log(currentVal)
  console.log(previousVal)
  if (currentVal !== '' && previousVal !== '') {
    calculate();
  }
})

function getNumbers(num){
  if (currentVal.length <= 19) {
    currentVal += num;
  }
}

function addDecimal(){
  if(!currentVal.includes(".")){
    currentVal += '.';
  }
}

function getOperator(op) {
  calculate()
  operator = op;
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
    case 'x':
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