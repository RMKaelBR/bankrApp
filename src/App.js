import {useState} from 'react'
import Header from './components/Header'
import Button from './components/Button'
import User from './components/User'

let activeAccountIndex = 0

function App() {
  const [inputValue, setInputValue] = useState('')
  const [users, setUser] = useState([
    {
      userId: 1,
      userName: "Kutsinta",
      accountBalance: 24000
    },
    {
      userId: 2,
      userName: "Chibby",
      accountBalance: 1500
    },
    {
      userId: 3,
      userName: "BrotherBintoy",
      accountBalance: 700
    },
    {
      userId: 4,
      userName: "Micromaggot",
      accountBalance: 50000
    },
    {
      userId: 5,
      userName: "Megamaggot",
      accountBalance: 3000
    },
    {
      userId: 6,
      userName: "Psykomaggot",
      accountBalance: 300000
    }
  ])

  const [balA, setbalA] = useState('')
  const [balB, setbalB] = useState(15000)

  

  //Deposit
  const deposit = () => {
    if (balB >= inputValue)
    {
      users[activeAccountIndex].accountBalance += +inputValue
      setbalA(users[activeAccountIndex].accountBalance)
      setbalB(balB - +inputValue)
      setInputValue('')
      console.log(`eh ${activeAccountIndex}`)
    }
  }

  //Withdraw
  const withdraw = () => {
    if (balA >= inputValue)
    {
      users[activeAccountIndex].accountBalance -= +inputValue
      setbalA(users[activeAccountIndex].accountBalance)
      setbalB(balB + +inputValue)
      setInputValue('')
      console.log(`eh ${activeAccountIndex}`)
    }
  }

  const onInputChange = (e) => {
    setInputValue(e.target.value)
    console.log("Text Input changed.")
  }

  const activeUserChange = (e) => {
    console.log(`User changed to ${e.target.value}.`)
    for(let user of users)
    {
      if (user.userName === e.target.value) {
        activeAccountIndex = user.userId - 1
        console.log(activeAccountIndex)
        setbalA(user.accountBalance)
        // setbalA(users[activeAccountIndex].accountBalance)
        break
      }
      else
        setbalA('')
    }

  }

  return (
    <div className="container">
      <Header />
      <div className="containerTwo">
        <div>
          <User userArray={users} 
            onActiveUserChange={activeUserChange} />
          <div>
            <h3>Account A Balance: {balA}</h3>
          </div>
          <div>
            <input type="text" value={inputValue} 
            onChange={onInputChange}></input>
          </div>
          <div>
            <Button 
            color='green' 
            text='Gimme $' 
            onClick={deposit} />
            <Button 
            color='orange' 
            text='Lose $' 
            onClick={withdraw} />
            <Button 
            color='maroon' 
            text='Alms $' 
            onClick={withdraw} />
          </div>
        </div>
        
        <div>
          <h3>Account B Balance: {balB}</h3>
        </div>
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