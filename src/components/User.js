const User = ({ userArray, onActiveUserChange }) => {
  return (
    <div>
        <label>Account A: </label>
        <select onChange={onActiveUserChange}>
          <option></option>
          <option>{userArray[0].userName}</option>
          <option>{userArray[1].userName}</option>
          <option>{userArray[2].userName}</option>
          <option>{userArray[3].userName}</option>
          <option>{userArray[4].userName}</option>
          <option>{userArray[5].userName}</option>
        </select>
    </div>
  )
}

export default User
