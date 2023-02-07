const User2 = ({ userArray, onActiveUserChange, activeUser1 }) => {
    console.log(activeUser1)
    return (
      <div>
          <label>Account B: </label>
          <select onChange={onActiveUserChange}>
            <option></option>
            {activeUser1!==0 ? <option>{userArray[0].userName}</option> : ''}
            {activeUser1!==1 ? <option>{userArray[1].userName}</option> : ''}
            {activeUser1!==2 ? <option>{userArray[2].userName}</option> : ''}
            {activeUser1!==3 ? <option>{userArray[3].userName}</option> : ''}
            {activeUser1!==4 ? <option>{userArray[4].userName}</option> : ''}
            {activeUser1!==5 ? <option>{userArray[5].userName}</option> : ''}
          </select>
      </div>
    )
  }
  
  export default User2
  