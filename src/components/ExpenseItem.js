import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate =new Date(2012, 3,5);
    const expenseTitle = "car Insurance";
    const expenseAmount = 234.57;
  return(
    <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div class="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>
  )
}
export default ExpenseItem;