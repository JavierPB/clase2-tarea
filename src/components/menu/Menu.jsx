const Menu = () => {
    const lnk1 = "#"
    const lnk2 = "#"
    return (
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0 f-flex">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={lnk1}>Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={lnk2}>Item2</a>
          </li>
        </ul>
      </div>
    )
}
export default Menu