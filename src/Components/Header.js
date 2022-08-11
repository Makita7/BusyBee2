import Nav from "./Nav";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="">
        <div className="divider"></div>

        <div className="divider">
          <h1 className="logo">
            <Link to='/'>Busy Bee</Link>
          </h1>
        </div>

        <Nav/>
    </header>
  )
}

export default Header