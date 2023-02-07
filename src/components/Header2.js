import PropTypes from 'prop-types'
import Button from './Button'

const Header2 = ({ title, onAdd, showAdd }) => {
    
  return (
    <header className='Header2'>
      <h1 >{title}</h1>
      <Button 
      color={showAdd ? 'maroon' : 'green'} 
      text={showAdd ? 'Close' : 'Add'} 
      onClick={onAdd} />
      {/* <Button color='darkblue' text='Hello2' />
      <Button color='maroon' text='Hello3' /> */}
    </header>
  )
}

Header2.defaultProps = {
    title: 'Task Tracker'
}

Header2.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header2
