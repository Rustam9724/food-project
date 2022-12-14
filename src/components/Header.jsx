import { Link } from 'react-router-dom';

function Header() {
    return <div>
        <nav className="#bdbdbd grey lighten-1">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React food</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className=""><Link to="/about">About</Link></li>
                    <li className=""><Link to="/contacts">Contacts</Link></li>
                </ul>   
            </div>
        </nav>
    </div>
}

export {Header}