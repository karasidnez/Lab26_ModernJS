const rates = {
    USD: 0.010,   
    EUR: 0.012,   
    RUB: 1        
};

const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

function convert() {
    errorDiv.textContent = '';
    resultDiv.textContent = '';

    let amount = amountInput.value.trim();
    if (amount === '') {
        errorDiv.textContent = 'Пожалуйста, введите сумму.';
        return;
    }
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
        errorDiv.textContent = 'Введите положительное число.';
        return;
    }

    const targetCurrency = currencySelect.value;
    const rate = rates[targetCurrency];
    const converted = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} RUB = ${converted} ${targetCurrency}`;
}

convertBtn.addEventListener('click', convert);