import Navigation from "./Navigation";
import Logo from "./../assets/logo.jpg"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Kartu from "./Kartu";
import KartuAsuransi from "./KartuAsuransi";

import Banner from "./../assets/banner.svg"
import Chat from "./../assets/chat.png"
import Toko from "./../assets/tokokesehatan.png"
import Buat from "./../assets/janji.png"
import Janji from "./../assets/janjimedis.png"
import Layanan from "./../assets/homelab.png"
import Asuransi from "./../assets/asuransi.png"

const Main = () => {
    return (
        <div>
            <Navigation image={Logo}/>
            <div style={{backgroundImage: `url(${Banner})`,backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="container" style={{justifyContent: "center"}}>
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1 style={{fontSize: "32px"}}>Solusi Kesehatan Terlengkap</h1>
                            <p style={{maxWidth: "600px"}}>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc!</p>
                            <div className="row gap-3">
                                <Kartu image={Chat} text="Chat dengan Dokter" />
                                <Kartu image={Toko} text="Toko Kesehatan" />
                                <Kartu image={Buat} text="Buat Janji RS" />
                                <Kartu image={Janji} text="Janji Medis" />
                                <Kartu image={Layanan} text="Layanan Homelab" />
                            </div>
                        </div>
                        <KartuAsuransi image={Asuransi}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;