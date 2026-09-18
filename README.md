# 💰 Expense Tracker

A simple, modern, and user-friendly web application designed to help users manage their daily income and expenses efficiently.

The Expense Tracker allows users to record transactions, categorize expenses, monitor their balance, search and filter transactions, and visualize their spending through a chart.

---

## 🌐 Live Demo

🔗 **Live Website:**  
https://gaurilngale208-bit.github.io/expense-tracker/

---

## 📌 Project Overview

Managing daily expenses manually can make it difficult to keep track of spending and savings. The **Expense Tracker** provides a simple digital solution for recording financial transactions and monitoring overall financial activity.

Users can enter their income and expenses along with the transaction name, amount, category, and date. The application automatically calculates the total income, total expenses, and available balance.

It also provides an **Expense Breakdown Chart** that helps users understand where their money is being spent.

---

## 🎯 Objectives

The main objectives of this project are:

- To provide a simple interface for recording income and expenses.
- To automatically calculate the available balance.
- To organize transactions using different categories.
- To allow users to search and filter transactions.
- To provide a visual representation of expenses.
- To store transaction data in the browser.
- To provide a responsive interface for different screen sizes.
- To provide a dark mode for better user experience.

---

## ✨ Features

### 💵 Financial Management
- Add income transactions.
- Add expense transactions.
- Automatically calculate total income.
- Automatically calculate total expenses.
- Automatically calculate available balance.

### 📂 Transaction Categories

Transactions can be organized into:

- 🍔 Food
- 🚗 Travel
- 🛍️ Shopping
- 💡 Bills
- 📚 Education
- 🎬 Entertainment
- 💊 Health
- 📦 Other

### 🔎 Search and Filter

Users can:

- Search transactions by name.
- Filter transactions according to category.
- View the number of transactions currently displayed.

### 🗑️ Transaction Management

- View transaction history.
- Delete unwanted transactions.
- Display transaction dates.
- Display income and expense amounts separately.

### 📊 Expense Visualization

The application uses a **doughnut chart** to display expenses according to different categories.

This makes it easier to understand spending patterns.

### 🌙 Dark Mode

Users can switch between:

- ☀️ Light Mode
- 🌙 Dark Mode

The selected theme is saved in the browser.

### 💾 Local Storage

Transaction information is stored using **Browser Local Storage**.

Therefore, transactions remain available after refreshing the page on the same browser and device.

### 📱 Responsive Design

The interface is designed to work on:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile devices
- 📟 Tablets

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure of the web application |
| **CSS3** | Styling and responsive design |
| **JavaScript** | Application functionality and calculations |
| **Chart.js** | Expense visualization |
| **Local Storage** | Storing transaction data |
| **GitHub Pages** | Hosting and deployment |

---

## 🏗️ Project Structure

```text
Expense-Tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
index.html

Contains the structure and user interface of the Expense Tracker.

style.css

Contains the styling, layout, colors, responsive design, cards, buttons, dark mode, and other visual elements.

script.js

Handles:

Adding transactions
Calculating income
Calculating expenses
Calculating balance
Searching transactions
Filtering transactions
Deleting transactions
Local Storage
Dark mode
Expense chart
README.md

Contains documentation and information about the project.

⚙️ How the Application Works

The basic working flow of the application is:

User
  ↓
Enter Transaction Details
  ↓
Select Income / Expense
  ↓
Select Category
  ↓
Select Date
  ↓
Add Transaction
  ↓
Transaction Stored in Local Storage
  ↓
Calculate Income & Expenses
  ↓
Calculate Available Balance
  ↓
Display Transaction History
  ↓
Update Expense Chart

🚀 How to Run the Project Locally
Step 1: Download the Project

Download or clone this repository to your computer.

Step 2: Open the Project

Open the project folder in Visual Studio Code.

Step 3: Open index.html

Open the index.html file.

Step 4: Run the Application

You can run the project using Live Server in Visual Studio Code.

The application will open in your browser.

📊 Example

Suppose a user enters:

Transaction	Amount	Type	Category
Salary	₹25,000	Income	Other
Lunch	₹250	Expense	Food
Bus	₹100	Expense	Travel
Books	₹800	Expense	Education

The application automatically calculates:

Total Income     = ₹25,000
Total Expenses   = ₹1,150
Available Balance = ₹23,850

The expense chart will also represent the spending according to categories.

💾 Data Storage

The application uses Local Storage, a browser-based storage mechanism.

When a transaction is added:

Transaction
     ↓
JavaScript
     ↓
Local Storage
     ↓
Saved in Browser

When the application is opened again, the saved transactions are loaded from Local Storage.

Note: Local Storage is specific to the browser and device. Data is not shared between different users or devices.

🔐 Privacy

This project does not use a server or external database for storing transactions.

Transaction information is stored locally in the user's browser using Local Storage.

🌐 Deployment

The project is deployed using GitHub Pages.

Repository

https://github.com/Gaurilngale208-bit/expense-tracker

Live Website

https://gaurilngale208-bit.github.io/expense-tracker/

🔮 Future Enhancements

The project can be further improved by adding:

📈 Monthly expense reports
📅 Monthly and yearly filtering
💰 Budget management
🔔 Budget limit notifications
📥 Export transactions to Excel or CSV
📄 Generate expense reports
🔐 User authentication
☁️ Cloud database
📊 Additional financial charts
💱 Multiple currency support
🎓 Project Information

Project Title: Expense Tracker

Project Type: Mini Project

Domain: Web Development

Technologies: HTML, CSS, JavaScript

Hosting Platform: GitHub Pages

👩‍💻 Author

Gaurilngale208-bit

GitHub:
https://github.com/Gaurilngale208-bit

📄 License

This project is created for educational and academic purposes.

⭐ Acknowledgement

This project was developed as a learning project to understand the practical implementation of HTML, CSS, JavaScript, browser storage, data visualization, and web deployment using GitHub Pages.

💜 Thank You for Visiting!

If you find this project useful, consider giving the repository a ⭐ on GitHub.
