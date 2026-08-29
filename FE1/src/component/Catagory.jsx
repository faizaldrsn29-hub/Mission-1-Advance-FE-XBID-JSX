import '../App.css'



function Catagory() {


    return(
        <section className="feature-content">
            <div className="container">

                <div className="content-header">
                    <h1>Paling Banyak Dicari</h1>
               </div>

               <div className="content-catagori">
                <ul className="catagori">
                    <li><a href="./">Semua</a></li>
                    <li><a href="/">Properti</a></li>
                    <li><a href="/">Elektronik</a></li>
                    <li><a href="/">Kendaraan</a></li>
                    <li><a href="/">Alat Berat</a></li>
                    <li><a href="/">LifeStyle</a></li>
                </ul>
               </div>
            </div>
        </section>

    );
}

export default Catagory;