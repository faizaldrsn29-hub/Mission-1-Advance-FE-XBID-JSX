import hero from '../assets/banner.png'

function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Temukan Objek Lelang Terbaik dengan XBID</h1>
                    <p>Cari kendaraan, properti, elektronik, dan berbagai objek lelang lainnya</p>

                    <form action="#" className="search-box">
                        <input type="text" placeholder="Cari Objek Lelang..."/>
                        <button>Cari</button>
                    </form>
            </div>
        </div>
    );
}

export default Hero;