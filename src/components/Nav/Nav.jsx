import { Link } from "react-router-dom"

function Nav() {

  return (
    <div>
        <h1>Heróis</h1>
        <Link to='/'>Home</Link>
        <Link to='/produtos'>Produtos</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Nav