function calculateSavings() {
  const income = parseFloat(document.getElementById('income').value) || 0;
  const expenses = parseFloat(document.getElementById('expenses').value) || 0;
  const savings = income - expenses;
  
  document.getElementById('result').innerText = `Net Savings: $${savings}`;
}