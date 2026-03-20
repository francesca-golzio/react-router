import {NavLink} from 'react-router-dom'

function AppHeader() {


  return (
    <>
      <h1>Il mio sito</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  )
}

export default AppHeader
