import { NavLink } from 'react-router-dom';
import menu from '../data/menu'

function AppHeader() {

  return (
    <>
      <header>

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><h1>Il mio sito</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                {menu.map(item =>
                    <li className="nav-item" key={item.id}>
                      <NavLink to={item.path} className="nav-link">{item.text}</NavLink>
                    </ li>
                )}
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="nav_search" />
                <button className="btn search_btn" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
  
}

export default AppHeader

/* lista non centralizzata con menu.map */
{/* <li className="nav-item">
  <NavLink to="/" className="nav-link" aria-current="page">Home </NavLink>
</li>
<li className="nav-item">
  <NavLink to="/products" className="nav-link">Products </NavLink>
</li>
<li className="nav-item">
  <NavLink to="/about" className="nav-link">About </NavLink>
</li> */}