import './NewExpense.css'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    
    const editingHandler = () => {
        setIsEditing(true)
    }
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={editingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense