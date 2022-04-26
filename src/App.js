// import Item from './components/item'
import React, {useState} from 'react';
import './App.css';


function App() {
    const [name, setName]= useState("default")
    const [income, setIncome]= useState("high")

    function onSubmitHandle(e){
      console.log('state=' ,name ,income)

    }
    function handleNameChange(e){
      setName(e.target.value)

    }
    
    function handleIncomeChange(e){
      setIncome(e.target.value)

    }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmitHandle}>
        <div>
        <span>Name:</span>
        <input value={name} type="text" onChange={handleNameChange}></input>
        </div>
        <div>
        <span>Income:</span>
       <select value={income}onChange={handleIncomeChange} >
         <option value= "high">High</option>
         <option value= "mid">Mid22</option>
         <option value= "low">Lowkwddssddsdsdsd</option>
       </select>
       <input type="submit" valur="submit"></input>
        </div>
        </form> 
     
      {/* <button onClick = {removeUnhealthyHandle} className='remove-button'>Remove unhealthy</button> */}
      </header>
    </div>
  );
}

export default App;
