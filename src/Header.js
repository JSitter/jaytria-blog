import './css/Header.css';
import Intro from './Intro.js';

function Header() {
    return (
        <header>
            <div className="header-stripes">
                <div className="header-background tilt">&nbsp</div>
                <div className="header-background-stripe tilt">&nbsp</div>
                &nbsp
            </div>

            <div className="website-heading">
                <h1>Jaytria</h1>
                <h2>Web Development Blog</h2>
            </div>
            <Intro />
        </header>
    );
}

export default Header;
