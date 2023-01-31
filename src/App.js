import {useState} from 'react'
import Header from './components/Header'
import Button from './components/Button'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [balA, setbalA] = useState(8000)
  const [balB, setbalB] = useState(15000)

  const deposit = () => {
    if (balB >= inputValue)
    {
      setbalA(balA + +inputValue)
      setbalB(balB - +inputValue)
    }
    
  }

  const withdraw = () => {
    if (balA >= inputValue)
    {
      setbalA(balA - +inputValue)
      setbalB(balB + +inputValue)
    }
    
  }

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="container">
      <Header />
      <div>
        <h3>Account A Balance: {balA}</h3>
      </div>
      <div>
        <input type="text" value={inputValue} onChange={onInputChange}></input>
      </div>
      <div>
        <Button 
        color='green' 
        text='Gimme $' 
        onClick={deposit} />
        <Button 
        color='maroon' 
        text='Steal $' 
        onClick={withdraw} />
      </div>
      <div>
        <h3>Account B Balance: {balB}</h3>
      </div>
    </div>
    
  );
}

// const App = () => {
//   return (
//     <div className="container">
//       <Header />
//     </div>
//   )
// }

export default App;