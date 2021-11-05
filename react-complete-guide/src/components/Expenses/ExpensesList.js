import './ExpensesList.css'
import ExpenseItens from './ExpenseItens'
const ExpensesList = props => {
    
  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }
  return (
      <ul classNames='expenses-list'>
     {props.items.map((expense) => (
      <ExpenseItens
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>
    ))}
      </ul>
  )

}

export default ExpensesList