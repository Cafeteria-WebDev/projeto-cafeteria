import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <header className="flex justify-between items-center py-6 px-[5%] bg-surface">
          <h1 className="p-2 text-text-light font-title text-4xl">Cafeteria Dev</h1>
        <nav>
              <ul className="flex text-lg text-text-light list-none items-center gap-8 font-title">
                <li>
                      <Link to="/" className="no-underline cursor-pointer hover:text-text-accent hover:text-[1.3rem] transition-all">Home</Link>
                </li>

                <li>
                      <Link to="/produtos" className="no-underline cursor-pointer hover:text-text-accent hover:text-[1.3rem] transition-all">Produtos</Link>
                </li>
            </ul>
        </nav>
      
    </header>
  )
}

export default Navbar
