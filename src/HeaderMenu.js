function HeaderMenu({ links }) {
    return (
        <nav>
            <ul>
                {links.map((link) => {
                    return (<li><a href={link.url}>{link.title}</a></li>);
                })}
            </ul>
        </nav>
    );
}

export default HeaderMenu;