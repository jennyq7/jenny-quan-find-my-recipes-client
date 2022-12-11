import './Header.scss';
import {Link} from 'react-router-dom';

function Header () {
    return (
        <header className="header">
            <Link to="/recipes"><h1>FIND MY RECIPES</h1></Link>
        </header>
    )
};

export default Header;