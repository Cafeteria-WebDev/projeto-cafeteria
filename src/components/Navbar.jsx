

const Navbar = () => {
  return (
    <header>
        <h1>Cafeteria Dev</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
            </ul>
        </nav>
      
    </header>
  )
}

export default Navbar
