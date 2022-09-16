import ExpenseItem from './components/ExpenseItem';

import './App.css';

function App() {
      const expenses = [
        {
          title:'car insurance', 
          amount:46.32, 
          date:new Date(2054,3,13)
      },
        {
          title:'bike insurance',
           amount:792.32,
            date:new Date(2076,3,13)
          },
        {
          title:'airoplane insurance',
           amount:934.32, 
           date:new Date(2021,3,13)
          },
        {
          title:'train insurance', 
          amount:32.32,
           date:new Date(2032,3,13)
          }
      ]




  return (
    <div className="App">
      <header className="App-header">
  <a
    className="App-link"
      target="_blank"
         rel="noopener noreferrer">
          <h2> Welcome to React with kumkum</h2>
          <ExpenseItem/>  
          <ExpenseItem/>  
          <ExpenseItem/>  
            </a>
        </header>
    </div>
  );
}

export default App;
