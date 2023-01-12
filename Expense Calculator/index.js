const expenses = []
        function addExpense () {
            const expenseInput = document.getElementById('expense-input')
            const expenseList = document.getElementById('expense-list')
            const totalExpense = document.getElementById('total-expense')
            const expense = parseInt(expenseInput.value.split('-').pop())
            const item = `<div>${expenseInput.value}</div>`
            expenses.push(expense)
            expenseList.innerHTML += item
            const totalPrice = expenses.reduce((a, b) => parseInt(a) + parseInt(b), 0)
            totalExpense.innerHTML = `Total Expense: ${totalPrice}`
            expenseInput.value = ''
        }