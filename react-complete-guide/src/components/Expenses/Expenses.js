import { useState } from 'react'
import ExpenseItens from './ExpenseItens'
import './Expenses.css'
import Card from '../UI/card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }  
  
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })


  return(
      <li>   
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpensesList items={filteredExpenses} />
      </Card>
      </li>
    )
}

export default Expenses