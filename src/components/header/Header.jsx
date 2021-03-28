import Menu from './../menu/Menu'


const Header = () => {
    const navLnk = ""
    return (
        <header>
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href={navLnk}>Tarea2 </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Menu />
            </div>
        </nav>

        </header>
    )
}

export default Header