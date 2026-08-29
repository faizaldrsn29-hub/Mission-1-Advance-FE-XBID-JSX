import "./Auth.css";
import logo from "../assets/xbid2.png";
import Navbar from "../component/Navbar";

function Register() {
	return (

		<>
		<Navbar/>
		<main className="auth-page">
			<form>
			<img className="logo" src={logo} alt="Logo" />
			<div className="header">
				<h1>Buat akun</h1>
				<p>Daftar untuk mengikuti lelang</p>
			</div>
				<div className="form-group">
					<label htmlFor="name">Nama</label>
					<input id="name" type="text" required placeholder="Masukkan nama" />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" required placeholder="Masukkan email" />
				</div>
				<div className="form-group">
					<label htmlFor="number">Nomor Handphone</label>
					<input id="number" type="number" required placeholder="Masukkan No HP 088xxxxx" />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input id="password" type="password" required placeholder="Masukkan password" />
				</div>
				<button type="submit">Daftar</button>
			</form>
		</main>
		</>
	);
}

export default Register;
