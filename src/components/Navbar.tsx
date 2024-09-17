


function Navbar(){
    return (
        <header>
        <nav id="section-content"
            className="px-3 shadow bg-gradient bg-primary py-2 d-flex align-items-center gap-3 rounded-pill">
            <a href="#home" title="Home" className="nav-link p-0 m-0 active rounded-pill">
                <li className="list-group-item "><i className="fa-solid fa-user"></i> <span className="sr-only">(current)</span>
                </li>
            </a>

            <a href="#about-me" title="About Me" className="nav-link p-0 m-0 rounded-pill">
                <li className="list-group-item ">
                    <i className="fa-brands fa-servicestack"></i></li>
            </a>

            <a href="#project" title="project" className="nav-link p-0 m-0 rounded-pill">
                <li className="list-group-item "> <i className="fa-regular fa-image"></i></li>
            </a>

            <a href="#skill" title="Learned Skill" className="nav-link p-0 m-0 rounded-pill">
                <li className="list-group-item "> <i className="fa-solid fa-user-tie"></i></li>
            </a>

            <a href="#contact" title="Contact" className="nav-link p-0 m-0 rounded-pill">
                <li className="list-group-item "> <i className="fa-solid fa-network-wired"></i></li>
            </a>
        </nav>

    </header>

    );
}

export default Navbar