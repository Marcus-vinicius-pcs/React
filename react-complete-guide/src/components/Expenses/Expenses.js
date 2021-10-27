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
  
  return(
      <div>   
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpenseItens
        title={props.item[0].title}
        date={props.item[0].date}
        amount={props.item[0].amount}
      ></ExpenseItens>
      <ExpenseItens
        title={props.item[1].title}
        date={props.item[1].date}
        amount={props.item[1].amount}
      ></ExpenseItens>
      <ExpenseItens
        title={props.item[2].title}
        date={props.item[2].date}
        amount={props.item[2].amount}
      ></ExpenseItens>
      <ExpenseItens
        title={props.item[3].title}
        date={props.item[3].date}
        amount={props.item[3].amount}
      ></ExpenseItens>
      </Card>
      </div>
    )
}

export default Expenses