// Transaction data
let transactions = [];

// Function to add a new transaction
function addTransaction() {
  const title = document.getElementById('title').value;
  const category = document.getElementById('category').value;
  const amount = parseFloat(document.getElementById('amount').value);

  const transaction = {
    title,
    category,
    amount
  };

  transactions.push(transaction);

  document.getElementById('title').value = '';
  document.getElementById('amount').value = '';
  updateTransactionList();
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateTransactionList();
}

function updateTransactionList() {
  const transactionList = document.getElementById('transactions');
  transactionList.innerHTML = '';

  transactions.forEach((transaction, index) => {
    const li = document.createElement('li');
    li.textContent = `${transaction.title} - $${transaction.amount.toFixed(2)}`;
    li.classList.add(transaction.category);
    li.addEventListener('click', () => deleteTransaction(index));
    transactionList.appendChild(li);
  });
}
