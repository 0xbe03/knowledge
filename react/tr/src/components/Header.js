import PropTypes from 'prop-types';

const Header = (props) => {
    return ( 
        <header>
            <h1>{props.name}</h1>
        </header>
     );
}

Header.defaultProps = { 
    name: 'Ahmad'
}

Header.propTypes = {
    title: PropTypes.string
}
 
export default Header;