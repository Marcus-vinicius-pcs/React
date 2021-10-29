import { useState } from 'react'
import ExpenseItens from './ExpenseItens'
import './Expenses.css'
import Card from '../UI/card'
import ExpensesFilter from './ExpensesFilter'
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }  
  
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return(
      <div>   
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    {filteredExpenses.map(expense => (
      <ExpenseItens
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>
    ))}
      </Card>
      </div>
    )
}

export default Expenses