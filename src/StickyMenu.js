import { useState, useEffect } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './css/StickyMenu.css';
import { MenuLinks } from './helpers';

function MenuList({ links, articles, expanded }) {
    return (
        <nav className={expanded ? "hamburger-nav-menu expanded" : "hamburger-nav-menu collapsed"}>
            <ul className="hamburger-menu-link-items">
                {links.map((link, index) => <li key={index}><a href={link.url}>{link.title}</a></li>)}
            </ul>
        </nav>
    );
}

function StickyMenu({ links }) {

    const [isVisible, setIsVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        let scrollLength = 340;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > scrollLength) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    return (
        <div className={isVisible ? "sticky-menu" : "hidden sticky-menu"} >
            <div className="menu-logo"><h2>Jaytria</h2> <h3>Web Development Blog</h3></div>

            <div className="hamburger-menu-wrapper" onClick={() => setExpanded(!expanded)}>
                <FontAwesomeIcon
                    className="hamburger-menu"
                    icon={expanded ? faTimes : faBars}
                />
            </div>
            <MenuList links={links} expanded={expanded} />
        </div>
    );
}

export default StickyMenu;