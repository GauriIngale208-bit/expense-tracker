// ===============================
// EXPENSE TRACKER
// ===============================

// Load saved transactions
let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

let expenseChart;


// ===============================
// ADD TRANSACTION
// ===============================

function addTransaction() {

    const text =
        document.getElementById("text").value.trim();

    const amount =
        parseFloat(document.getElementById("amount").value);

    const type =
        document.getElementById("type").value;

    const category =
        document.getElementById("category").value;

    const date =
        document.getElementById("date").value;


    // Validate input
    if (
        text === "" ||
        isNaN(amount) ||
        amount <= 0 ||
        date === ""
    ) {

        alert("Please fill in all the details.");

        return;
    }


    // Create transaction
    const transaction = {

        text: text,

        amount: amount,

        type: type,

        category: category,

        date: date
    };


    // Add transaction
    transactions.push(transaction);


    // Save
    saveTransactions();


    // Clear form
    document.getElementById("text").value = "";

    document.getElementById("amount").value = "";

    document.getElementById("date").value = "";


    // Update page
    updateUI();
}



// ===============================
// SAVE TRANSACTIONS
// ===============================

function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}



// ===============================
// UPDATE EVERYTHING
// ===============================

function updateUI() {

    updateSummary();

    displayTransactions();

    updateChart();
}



// ===============================
// UPDATE BALANCE
// ===============================

function updateSummary() {

    let income = 0;

    let expense = 0;


    transactions.forEach(function(transaction) {

        if (transaction.type === "income") {

            income += transaction.amount;

        } else {

            expense += transaction.amount;
        }

    });


    const balance = income - expense;


    document.getElementById("income").innerText =
        `₹${income.toFixed(2)}`;


    document.getElementById("expense").innerText =
        `₹${expense.toFixed(2)}`;


    document.getElementById("balance").innerText =
        `₹${balance.toFixed(2)}`;
}



// ===============================
// DISPLAY TRANSACTIONS
// ===============================

function displayTransactions() {

    const list =
        document.getElementById("list");


    const searchInput =
        document.getElementById("search");


    const filterInput =
        document.getElementById("filterCategory");


    const search =
        searchInput.value.toLowerCase();


    const filter =
        filterInput.value;


    list.innerHTML = "";


    let displayedCount = 0;


    transactions.forEach(function(transaction, index) {

        const matchesSearch =
            transaction.text
                .toLowerCase()
                .includes(search);


        const matchesCategory =
            filter === "all" ||
            transaction.category === filter;


        if (!matchesSearch || !matchesCategory) {

            return;
        }


        displayedCount++;


        const li =
            document.createElement("li");


        const sign =
            transaction.type === "income"
                ? "+"
                : "-";


        const amountClass =
            transaction.type === "income"
                ? "income-amount"
                : "expense-amount";


        li.innerHTML = `

            <div class="transaction-info">

                <span class="transaction-name">

                    ${transaction.category}
                    ${transaction.text}

                </span>


                <span
                    class="transaction-amount ${amountClass}"
                >

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

    });


    // Update transaction count
    document.getElementById(
        "transactionCount"
    ).innerText =
        `${displayedCount} transaction${displayedCount === 1 ? "" : "s"}`;
}



// ===============================
// FORMAT DATE
// ===============================

function formatDate(date) {

    const dateObject =
        new Date(date);


    return dateObject.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}



// ===============================
// DELETE TRANSACTION
// ===============================

function deleteTransaction(index) {

    transactions.splice(index, 1);

    saveTransactions();

    updateUI();
}



// ===============================
// EXPENSE CHART
// ===============================

function updateChart() {

    const canvas =
        document.getElementById("expenseChart");


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


    const labels =
        Object.keys(categoryTotals);


    const values =
        Object.values(categoryTotals);


    // Remove previous chart
    if (expenseChart) {

        expenseChart.destroy();
    }


    // Don't create empty chart
    if (labels.length === 0) {

        return;
    }


    expenseChart =
        new Chart(canvas, {

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



// ===============================
// DARK MODE
// ===============================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");


    const isDark =
        document.body.classList.contains("dark-mode");


    localStorage.setItem(
        "darkMode",
        isDark
    );


    document.getElementById(
        "themeButton"
    ).innerText =
        isDark ? "☀️" : "🌙";
}



// ===============================
// LOAD DARK MODE
// ===============================

function loadDarkMode() {

    const darkMode =
        localStorage.getItem("darkMode");


    if (darkMode === "true") {

        document.body.classList.add(
            "dark-mode"
        );


        document.getElementById(
            "themeButton"
        ).innerText = "☀️";
    }
}



// ===============================
// START APPLICATION
// ===============================

loadDarkMode();

updateUI();