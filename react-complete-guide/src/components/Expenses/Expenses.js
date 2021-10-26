import ExpenseItens from './ExpenseItens'
import './Expenses.css'
import Card from '../UI/card'
function Expenses(props){
    return(
    <Card className='expenses'>
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
    )
}

export default Expenses