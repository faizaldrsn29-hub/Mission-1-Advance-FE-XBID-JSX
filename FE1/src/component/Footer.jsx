import { Link } from "react-router-dom";
import logo from '../assets/background-removed.png'
import wa from '../assets/wa.png'
import loc from '../assets/loc.png'
import fax from '../assets/fax.png'
import gmail from '../assets/gmail.png'
import ig from '../assets/instagram.png'

function Footer(){

    return (
<>
<div className="footer-content">
            <div className="container">
                <div className="footer-box">

                    <div className="logo-box">
                    <a href="/" className="logo"> <img src={logo} alt="XBID" style={{ height: '120px', width: '180px' }} /> </a>
                    <p>Platform lelang online terpercaya untuk berbagai jenis objek lelang.</p>
                    </div>


                        <div className="footer-catagori">
                            <h4>Layanan</h4>
                            <ul className="catagori2">
                                <li><Link href="#">Cara Ikuti Lelang</Link></li>
                                <li><Link href="#">Cara Melelangkan Aset</Link></li>
                                <li><Link href="#">Cara Registrasi</Link></li>
                                <li><Link href="#">Pembayaran Deposit</Link></li>
                                <li><Link href="#">FAQ</Link></li>
                                <li><Link href="#">Kebijakan Privasi</Link></li>
                            </ul>
                        </div>
                        
                        <div className="footer-catagori">
                            <h4>Hubung kami</h4>
                            <ul className="catagori2">
                                <li>
                                    <img src={loc} alt="XBID" style={{ height: '20px', width: '20px' }} />
                                    <span>
                                        <b>XBID</b>
                                        <br />
                                        Jl. Gatot Subroto, Pekandangan, Kec. Indramayu,
                                        <br />
                                        Kab. Indramayu, Jawa Barat 45213
                                    </span>
                                </li>
                                
                                 <li>
                                    <img src={wa} alt="XBID" style={{ height: '20px', width: '20px' }} />
                                    <span>
                                    081-123-4567xxx
                                    </span>
                                </li>

                                
                                 <li>
                                    <img src={fax} alt="XBID" style={{ height: '20px', width: '20px' }} />
                                    <span>
                                    021-123-4567xxx
                                    </span>
                                </li>

                                
                                 <li>
                                    <img src={gmail} alt="XBID" style={{ height: '20px', width: '20px' }} />
                                    <span>
                                    info@xbid.com
                                    </span>
                                </li>

                                
                                 <li>
                                    <img src={ig} alt="XBID" style={{ height: '20px', width: '20px' }}/>
                                    <span>
                                    @xbid
                                    </span>
                                </li>

                            </ul>
                        </div>


                </div>
            </div>
        </div>



        <div className="container-copyright">
            <p>&copy; 2026 XBID. All rights reserved.</p>
        </div>
</>


);
}

export default Footer;