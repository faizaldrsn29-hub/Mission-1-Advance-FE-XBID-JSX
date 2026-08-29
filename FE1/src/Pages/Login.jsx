import "./Auth.css";
import google from "../assets/google.png"
import Logo from "../assets/xbid2.png"
import { Link } from "react-router-dom"
import Navbar from '../component/Navbar.jsx'



function Login() {

return (
    <>
    <Navbar />
    <main className="auth-page">

    <form action="" method="post">
    <img className="logo" src={Logo} alt="logo" style={{display: "flex", justifyContent: "center"}} />
    <div className="header">
    <h1>Selamat datang</h1>
    <p>Silakan masuk ke akun Anda</p>

    </div>

        <div className="form-group">
            <label className="form-input" htmlFor="username">Username/Email</label>
            <input type="text" id="username" required placeholder="Masukkan username"/>
        </div>
        
        <div className="form-group">
        <label className="form-input" htmlFor="password">Password</label>
        <input type="password" id="password" required placeholder="Masukkan password"/>
        <img src="../assets/eye-off.png" alt="eye" id="togglePassword"/>
        </div>

        <p><Link to="/register">Belum Punya akun? Daftar di sini</Link></p>
        <p><a href="#">Lupa Kata Sandi?</a></p>
        <button type="submit">Masuk</button>
        <p className="or">Atau</p>
        <button type="button">
            <img src={google} alt="google" width="20px" height="20px"/>
            Masuk dengan Google
        </button>

    </form>
    </main>
    </>
)};

export default Login;