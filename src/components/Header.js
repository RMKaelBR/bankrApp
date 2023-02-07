import PropTypes from 'prop-types'
// import Button from './Button'

const Header = ({ title }) => {
    // const onClick = () => {
    //     console.log('Click')
    // }
  return (
    <header className='header'>
      <h1>{title}</h1>
      {/* <Button 
      color='green' 
      text='Add' 
      onClick={onClick} /> */}
      {/* <Button color='darkblue' text='Hello2' />
      <Button color='maroon' text='Hello3' /> */}
    </header>
  )
}

Header.defaultProps = {
    title: 'BankrApp'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
