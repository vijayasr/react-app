// import Item from './components/item'
import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

let born = false;
function App() {
  const [growth, setGrowth] = useState(0)
  const [income, setIncome] = useState("high")

  useEffect(() => {
    console.log('I am born');
  }, []);

  useEffect(() => {
    if (born) {
      console.log('make mistake and learn');
    }
    else {
      born=true
    }
  })

  function growHandle (){
    setGrowth(growth + 10)
  }
 return(
<div className="App">
  <header className="App-header">

    <div>
      <h3>Useeffect:</h3>
      <h3>growth:{growth}</h3>
      <button onClick={growHandle}>learn and grow</button>
    </div>

{/* <button onClick = {removeUnhealthyHandle} className='remove-button'>Remove unhealthy</button> */}
  </header>
</div>
  
 )}

export default App;
