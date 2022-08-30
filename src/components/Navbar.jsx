const Navbar = ({setOpenForm}) => {
    return (
        <nav className="navbar">
            <h1 className="navbar__title">Bulletin Board</h1>
            <ul className="navbar__list">
                <li><button onClick={() => setOpenForm(prev => !prev)}>Create new article</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;