let calculation = localStorage.getItem('update') || '';

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.js-result').innerHTML = calculation ;
}
