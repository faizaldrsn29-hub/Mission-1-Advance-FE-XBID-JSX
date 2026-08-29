import '../App.css'
import logo from '../assets/xbid2.png'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className="navbar">
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
            </Link>

                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="hamburger">
                    =
                </label>

                <div className="menu">
                   <li><Link to="/home">Home</Link></li>
                   <li><Link to="/object-lelang">Object Lelang</Link></li>
                   <li><Link to="/jadwal-lelang">Jadwal Lelang</Link></li>
                   <li><Link to="/prosedur">Prosedur</Link></li>
                   <li><Link to="/tentang-xbid">Tentang XBID</Link></li>
                   <li><Link to="/login">Ikuti Lelang</Link></li>
                </div>

        </div>
    )
};

export default Navbar;