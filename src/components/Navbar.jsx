import PropTypes from 'prop-types';

const Navbar = ({username}) => {
  return (
    <div>
        <h1>the username is {username}</h1>
    </div>
  )
}

export default Navbar

Navbar.propTypes = {
    username: PropTypes.string.isRequired, // Add this line for prop validation
  };



