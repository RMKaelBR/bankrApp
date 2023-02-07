import Expense from './Expense'

const Expenses = ({ expenses, onDelete, onToggle }) => {
    return (
      <>
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} 
          onDelete={onDelete} 
          onToggle={onToggle}/>
        ))}
      </>
  
    )
  }
  
  export default Expenses
  