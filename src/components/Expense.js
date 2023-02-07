
const Expense = ({ expense, onDelete, onToggle }) => {
  return (
    <div className={`expense ${expense.reminder ? 'reminder': ''}`} 
    onDoubleClick= {() => onToggle(expense.id)}>
      <h3>
        {expense.text} 
        <button 
            style={{color: 'green', 
            cursor: 'pointer'}} 
            onClick={() => onDelete(expense.id)}
        />
      </h3>
      <p >{expense.day}</p>
    </div>
  )
}

export default Expense
