// Load saved transactions
let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

let expenseChart;


// Add Transaction
function addTransaction() {

    const text = document.getElementById("text").value.trim();
    const amount = parseFloat(
        document.getElementById("amount").value
    );
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (
        text === "" ||
        isNaN(amount) ||
        amount <= 0 ||
        date === ""
    ) {
        alert("Please fill in all the details.");
        return;
    }

    const transaction = {
        text: text,
        amount: amount,
        type: type,
        category: category,
        date: date
    };

    transactions.push(transaction);

    saveTransactions();

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";

    updateUI();
}


// Save transactions
function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}


// Update website
function updateUI() {

    const list = document.getElementById("list");

    list.innerHTML = "";

    let income = 0;
    let expense = 0;

    transactions.forEach(function(transaction, index) {

        const li = document.createElement("li");

        const sign =
            transaction.type === "income" ? "+" : "-";

        const amountClass =
            transaction.type === "income"
                ? "income-amount"
                : "expense-amount";

        li.innerHTML = `
            <div class="transaction-info">

                <span class="transaction-name">
                  ${transaction.text}
                </span>

                <span class="transaction-amount ${amountClass}">
                    ${sign} ₹${transaction.amount.toFixed(2)}

                    <span
                        class="delete"
                        onclick="deleteTransaction(${index})"
                    >
                        🗑️
                    </span>
                </span>

            </div>

            <div class="transaction-details">
                📅 ${formatDate(transaction.date)}
            </div>
        `;

        list.appendChild(li);

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }
    });


    document.getElementById("income").innerText =
        `₹${income.toFixed(2)}`;

    document.getElementById("expense").innerText =
        `₹${expense.toFixed(2)}`;

    document.getElementById("balance").innerText =
        `₹${(income - expense).toFixed(2)}`;

    updateChart();
}


// Format date
function formatDate(date) {

    const dateObject = new Date(date);

    return dateObject.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


// Delete transaction
function deleteTransaction(index) {

    transactions.splice(index, 1);

    saveTransactions();

    updateUI();
}


// Create Expense Chart
function updateChart() {

    const canvas = document.getElementById("expenseChart");

    if (!canvas) {
        return;
    }

    const categoryTotals = {};

    transactions.forEach(function(transaction) {

        if (transaction.type === "expense") {

            if (!categoryTotals[transaction.category]) {
                categoryTotals[transaction.category] = 0;
            }

            categoryTotals[transaction.category] +=
                transaction.amount;
        }
    });


    const labels = Object.keys(categoryTotals);
    const values = Object.values(categoryTotals);


    if (expenseChart) {
        expenseChart.destroy();
    }


    if (labels.length === 0) {
        return;
    }


    expenseChart = new Chart(canvas, {

        type: "doughnut",

        data: {
            labels: labels,

            datasets: [{
                data: values
            }]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });
}


// Load saved data when page opens
updateUI();