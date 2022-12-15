import './Header.scss';
import { Link } from 'react-router-dom';
import hat from "../../assets/cooking_hat.png";

function Header() {
    return (
        <header className="header">
            <img src={hat} className="header__img" />
            <Link to="/recipes" className="header__link"><h1 className="header__title">RECIPE BOX</h1></Link>
        </header>
    )
};

export default Header;



