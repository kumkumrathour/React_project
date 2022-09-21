import React from 'react'
import './App.css';
import Expenses from './components/Expenses/Expenses'

const App = () => {
      const expenses = [
        {
          id:'e1',
          title:'car insurance', 
          amount:46.32, 
          date:new Date(2020,3,13)
      },
        {
          id:'e2',
          title:'bike insurance',
           amount:792.32,
            date:new Date(2022,5,3)
          },
        {
          id:'e3',
          title:'airoplane insurance',
           amount:934.32, 
           date:new Date(2021,7,23)
          },
        {
          id:'e4',
          title:'train insurance', 
          amount:32.32,
           date:new Date(2019,9,15)
          }
      ]




  return (
    <div>
          <h1> Welcome to React </h1>
          <Expenses items={expenses}/>
    </div>
  );
}

export default App;
