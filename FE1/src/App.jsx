// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import mobil from './assets/fortuner.png'
import './App.css'
import Hero from './component/Hero.jsx';
import Navbar from './component/Navbar.jsx';
import Card from './component/Card.jsx';
import Catagory from './component/Catagory.jsx';
import c1 from './assets/c1.webp'
import c2 from './assets/c2.webp'
import c3 from './assets/c3.webp'
import Footer from './component/Footer.jsx';
import beko from './assets/beko.png'
import dozer from './assets/dozer.png'
import iphone from './assets/iphone 17.png'
import lv from './assets/lv.png'
import ps5 from './assets/stik ps5.png'
import harman from './assets/harmankardon.png'
import nike from './assets/sepatunike.png'
import moge from './assets/moge.png'

function App() {
  
  const cardData = [
    {
      title: 'Fortuner',
      description: 'Toyota Fortuner adalah mobil SUV ladder frame berukuran besar berkapasitas 7 penumpangnya yang tangguh di berbagai medan. Mobil ini memiliki dimensi panjang 4.795 mm, lebar 1.855 mm, dan tinggi 1.835 mm, serta dibekali pilihan mesin bensin dan diesel bertenaga seperti mesin 2.4L atau 2.8L VNT Intercooler',
      imageUrl: mobil,
    },
    {
      title: 'Kawasaki Ninja H2',
      description: 'Kawasaki Ninja H2 adalah motor hypersport jalan raya bermesin supercharged buatan Kawasaki Motor Indonesia yang menawarkan performa buas dan kecepatan tinggi.Performa MesinKapasitas: 998 cc, 4-silinder segaris (In-Line Four), 4-langkah (4-stroke), DOHC.Teknologi: Menggunakan pendingin cairan dan supercharger khas Kawasaki.Tenaga: Menghasilkan tenaga maksimum sekitar 231 PS.Kaki-Kaki dan SuspensiSuspensi Depan: Menggunakan garpu depan KYB AOS-II yang empuk dan stabil.Suspensi Belakang: Menggunakan shock Öhlins TTX36 dengan pengatur tekanan jarak jauh.Pengereman: Dilengkapi kaliper dan rem cakram berkualitas tinggi dari Brembo.Fitur ElektronikKontrol Traksi: Memiliki sistem KTRC (Kawasaki Traction Control) untuk menjaga traksi ban.Manajemen Sasis: Dilengkapi teknologi elektronik canggih turunan dari balap WorldSBK',
      imageUrl: moge,
    },
    {
      title: 'Buldozer',
      description: 'Bulldozer (buldoser) adalah jenis alat berat traktor yang dilengkapi dengan pisau besi besar (blade) di bagian depan. Alat berat ini dirancang khusus untuk mendorong, meratakan, menggali, menimbun, dan menarik material dalam volume besar seperti tanah, pasir, atau puing-puing',
      imageUrl: dozer,
    },
    {
      title: 'Ekskavator',
      description: 'Ekskavator (excavator/bego) adalah alat berat yang utamanya digunakan untuk menggali tanah, memindahkan material, dan mengeruk permukaan. Alat ini memiliki ciri khas berupa lengan (boom), lengan ayun (arm), dan keranjang keruk (bucket) yang digerakkan oleh sistem hidrolik',
      imageUrl: beko,
    },
    {
      title: 'Iphone 17 Promaxx',
      description: 'iPhone 17 Pro Max adalah ponsel pintar tertinggi Apple dengan layar LTPO Super Retina XDR OLED 6,9 inci, chip A19 Pro, dan tiga kamera belakang 48 MP.Spesifikasi UtamaLayar: 6,9 inci (1320 x 2868 piksel), refresh rate adaptif 120 Hz, kecerahan puncak 3000 nits.Performa: Chip A19 Pro fabrikasi 3nm dengan sistem pendingin vapor chamber.Kamera: Tiga lensa belakang beresolusi 48 MP (utama, ultrawide, periskop telefoto) dengan zoom optik hingga 8x.Baterai: Kapasitas 4.823 mAh yang diklaim mampu bertahan hingga 37 jam pemutaran video.Material & Desain: Bodi unibodi aluminium dengan lapisan pelindung Ceramic Shield.',
      imageUrl: iphone,
    },
    {
      title: 'Tas Luis Vuitton',
      description: 'Louis Vuitton is a world-famous French luxury fashion house that specializes in leather goods, trunks, ready-to-wear clothing, watches, and accessorie',
      imageUrl: lv,
    },
     {
      title: 'Sepatu Nike',
      description: 'Secara umum, deskripsi sepatu Nike ',
      imageUrl: nike,
    },
     {
      title: 'Playstation 5',
      description: 'PlayStation 5 (PS5) adalah konsol video game generasi kesembilan buatan Sony Interactive Entertainment yang dirilis untuk memberikan pengalaman bermain game dengan performa tinggi.Spesifikasi UtamaPenyimpanan: Menggunakan Solid State Drive (SSD) kustom berkapasitas tinggi untuk pemuatan game yang sangat cepat.Performa Grafis: Didukung GPU AMD kustom dengan teknologi ray tracing dan resolusi hingga 4K bahkan dukungan hingga 8K.Audio: Dilengkapi teknologi efek audio 3D untuk pengalaman suara yang imersif.Kompatibilitas Mundur: Bisa memainkan sebagian besar game dari konsol sebelumnya seperti PlayStation 4',
      imageUrl: ps5,
    },
    {
      title: 'Harman Kardon Onyx',
      description: 'Harman Kardon Onyx adalah lini speaker Bluetooth portabel premium yang dikenal karena bentuk bundar ikonik dan kualitas suara bas yang kuat.Karakteristik UtamaDesain Ikonik: Memiliki bentuk bundar yang elegan dan sering dilengkapi dengan pegangan aluminium terintegrasi agar mudah dipindahkan.Kualitas Audio: Menghasilkan vokal yang jernih, nada tinggi yang bersih, serta dentuman bas mendalam khas Harman Kardon.Baterai Portabel: Dilengkapi baterai internal yang umumnya mampu bertahan hingga 8 jam pemutaran musik.Evolusi Seri: Seri ini terus berkembang dari generasi awal hingga versi terbaru seperti Harman Kardon Onyx Studio 9 ',
      imageUrl: harman,
    },
  ];

  const cardData2 = [
    {
      title: 'E-KONVENSIONAL',
      description: 'Lelang yang pengajuan penawarannya dilakukan oleh peserta, namun penyetoran dan pengembalian uang jaminan lelang menggunakan virtual account.',
      imageUrl: c1,
    },
    {
      title: 'OPEN BIDDING',
      description: 'Penawaran terbuka (open bidding) adalah penawaran yang disampaikan oleh peserta lelang dengan sistem kelipatan nilai tertentu.',
      imageUrl: c2,
    },
    {
      title: 'CLOSED BIDDING',
      description: 'Penawaran tertutup (closed bidding) adalah penawaran yang disampaikan oleh peserta lelang secara rahasia dan tidak diketahui oleh peserta lain.',
      imageUrl: c3,
    },
  ];

  return (
  
    <div>
      <Navbar/>
      <Hero/>
      <Catagory/>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>

       <section className="feature-content">
            <div className="container">

                <h2>Prosedur</h2>

                <div className="content-header">
                    <h1>Cara Penawaran Lelang</h1>
               </div>
            </div>
        </section>
         <div className="card-container">
        {cardData2.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
        
        <Footer></Footer>

    </div>

    
  )
}

export default App
