import { useState, useEffect } from 'react';
import './css/StickyMenu.css';

function StickyMenu() {

    const [isVisible, setIsVisible] = useState(false);
    // const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        let scrollLength = 340;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        // setScrollHeight(winScroll);

        if (winScroll > scrollLength) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    return (
        <div className={isVisible ? "sticky-menu" : "hidden sticky-menu"} >
            <div className="menu-logo"><h2>Jaytria</h2> <h3>Web Development Blog</h3></div>
            <h2>Title</h2>
            <div className="hamburger-menu">|||</div>
        </div>
    );
}

export default StickyMenu;