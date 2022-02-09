function HeaderMenu({ links }) {
    return (
        <nav>
            <ul>
                {links.map((link, index) => {
                    return (<li key={index}><a href={link.url}>{link.title}</a></li>);
                })}
            </ul>
        </nav>
    );
}

export default HeaderMenu;