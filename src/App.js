import {useState} from 'react'
import Header from './components/Header'
import Button from './components/Button'
import User from './components/User'
import User2 from './components/User2'
import Expenses from './components/Expenses'

let activeAccountIndex1 = null
let activeAccountIndex2 = null

function App() {
  const [inputValue, setInputValue] = useState('')
  
  const [users] = useState([
    {
      userId: 1,
      userName: "Kutsinta",
      accountBalance: 24000,
      expenses: []
    },
    {
      userId: 2,
      userName: "Chibby",
      accountBalance: 1500,
      expenses: []
    },
    {
      userId: 3,
      userName: "BrotherBintoy",
      accountBalance: 700,
      expenses: []
    },
    {
      userId: 4,
      userName: "Micromaggot",
      accountBalance: 50000,
      expenses: []
    },
    {
      userId: 5,
      userName: "Megamaggot",
      accountBalance: 3000,
      expenses: []
    },
    {
      userId: 6,
      userName: "Psykomaggot",
      accountBalance: 300000,
      expenses: []
    }
  ])
  
  const [balA, setbalA] = useState('')
  const [balB, setbalB] = useState('')

  //Deposit
  const deposit = () => {
    users[activeAccountIndex1].accountBalance += +inputValue
    setbalA(users[activeAccountIndex1].accountBalance)
    setInputValue('')
  }

  //Withdraw
  const withdraw = () => {
    users[activeAccountIndex1].accountBalance -= +inputValue
    setbalA(users[activeAccountIndex1].accountBalance)
    setInputValue('')
  }

  //Send Money
  const sendMoney = () => {
    if (balA >= inputValue)
    {
      users[activeAccountIndex1].accountBalance -= +inputValue
      users[activeAccountIndex2].accountBalance += +inputValue
      setbalA(users[activeAccountIndex1].accountBalance)
      setbalB(users[activeAccountIndex2].accountBalance)
      setInputValue('')
    }
  }


  const onInputChange = (e) => {
    setInputValue(e.target.value)
    console.log("Text Input changed.")
  }

  const activeUserChange = (e) => {
    console.log(`Active User changed to ${e.target.value}.`)
    for(let user of users)
    {
      if (user.userName === e.target.value) {
        activeAccountIndex1 = user.userId - 1
        setbalA(user.accountBalance)
        // setbalA(users[activeAccountIndex1].accountBalance)
        break
      }
      else
        setbalA('')
    }
  }

  const activeUserChange2 = (e) => {
    console.log(`Active User2 changed to ${e.target.value}.`)
    for(let user of users)
    {
      if (user.userName === e.target.value) {
        activeAccountIndex2 = user.userId - 1
        setbalB(user.accountBalance)
        // setbalA(users[activeAccountIndex1].accountBalance)
        break
      }
      else
        setbalB('')
    }
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="containerTwo">
          <div>
            <User userArray={users} 
              onActiveUserChange={activeUserChange} />
            <div>
              <h3>Balance: {balA}</h3>
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
              onClick={sendMoney} />
            </div>
          </div>
          
          <div>
            <User2 userArray={users} 
              onActiveUserChange={activeUserChange2} 
              activeUser1={activeAccountIndex1}/>
            <h3>Balance: {balB}</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <Header title="Expenses" style={{border: "1px solid red"}}/>
      </div>
    </>
    
    
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