import {useState} from 'react'
import Header from './components/Header'
import Button from './components/Button'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [balA, setbalA] = useState(0)

  const deposit = () => {
    setbalA(balA + +inputValue)
  }

  const withdraw = () => {
    setbalA(balA - +inputValue)
  }

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="container">
      <Header />
      <div>
        <h3>Balance: {balA}</h3>
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