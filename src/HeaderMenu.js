function HeaderMenu({ links }) {
    return (
        <ul>
            {links.map((link) => {
                return (<li><a href={link.url}>{link.title}</a></li>);
            })}
        </ul>
    );
}

export default HeaderMenu;