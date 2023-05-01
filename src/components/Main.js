import Navigation from "./Navigation";
import Logo from "./../assets/logo.jpg"
import Kartu from "./Kartu";
import KartuAsuransi from "./KartuAsuransi";
import Layanan from "./Layanan";
import Penawaran from "./Penawaran";
import ArtikelBtn from "./ArtikelBtn";
import Artikel from "./Artikel";
import Obat from "./Obat"
import ObatPenawaran from "./ObatPenawaran";
import App from "./Footer";
import Cacarmbtn from "./Cacarmonyet";

import Banner from "./../assets/banner.svg"

import Solusi1 from "./../assets/chat.png"
import Solusi2 from "./../assets/tokokesehatan.png"
import Solusi3 from "./../assets/janji.png"
import Solusi4 from "./../assets/janjimedis.png"
import Solusi5 from "./../assets/homelab.png"

import Asuransi from "./../assets/asuransi.png"

import Layanan1 from "./../assets/layananbidan.jpg"
import Layanan2 from "./../assets/covid19.jpg"
import Layanan3 from "./../assets/diabetes.jpg"
import Layanan4 from "./../assets/kesehatanjantung.jpg"
import Layanan5 from "./../assets/vaksin.jpg"
import Layanan6 from "./../assets/kulit.jpg"
import Layanan7 from "./../assets/sexual.jpg"
import Layanan8 from "./../assets/mental.jpg"
import Layanan9 from "./../assets/hewan.jpg"
import Layanan10 from "./../assets/parenting.jpg"

import Penunjang1 from "./../assets/stress.jpg"
import Penunjang2 from "./../assets/menstruasi.jpg"
import Penunjang3 from "./../assets/bmi.jpg"
import Penunjang4 from "./../assets/kehamilan.jpg"
import Penunjang5 from "./../assets/risikojantung.jpg"
import Penunjang6 from "./../assets/risikodiabetes.jpg"
import Penunjang7 from "./../assets/pengingat.jpg"
import Penunjang8 from "./../assets/donasi.jpg"
import Penunjang9 from "./../assets/depresi.jpg"
import Penunjang10 from "./../assets/kecemasan.jpg"

import Penawaran1 from "./../assets/penawaran1.jpg"
import Penawaran2 from "./../assets/penawaran2.jpg"
import Penawaran3 from "./../assets/penawaran3.jpg"

import Artikel1 from "./../assets/MenuSehat.jpg";
import Artikel2 from "./../assets/SaatSahur.jpg"
import Artikel3 from "./../assets/VaksinSinovac.jpg"
import Artikel4 from "./../assets/FaktorAsma.jpg"

import Obat1 from "./../assets/obatperawatan.jpg"
import Obat2 from "./../assets/vitamin.jpg"
import Obat3 from "./../assets/ibudananak.jpg"
import Obat4 from "./../assets/susu.png"
import Obat5 from "./../assets/ramadhan.jpg"

import Logoputih from "./../assets/logoputih.jpg"
import Googleplay from "./../assets/googleplay.jpg"
import Appstore from "./../assets/appstore.jpg"
import Daftar from "./../assets/hd-white-logo-icon.svg"



const Main = () => {
    return (
        <div>

            <Navigation image={Logo}/>
            <div className="py-5" style={{backgroundImage: `url(${Banner})`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>

                    <div className="container p-0" style={{justifyContent: "center"}}>
                            <div className="col-6">
                                <h1 style={{fontSize: "32px"}}>Solusi Kesehatan Terlengkap</h1>
                                <p style={{maxWidth: "600px"}}>Layanan dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc!</p>
                            </div>
                            <div className="row col-12 gap-3 p-0 m-0">
                                <div className="col-2 p-0">
                                    <Kartu image={Solusi1} text="Layanan dengan Dokter" />
                                </div>
                                <div className="col-2 p-0">
                                    <Kartu image={Solusi2} text="Toko Kesehatan" />
                                </div>
                                <div className="col-2 p-0">
                                    <Kartu image={Solusi3} text="Buat Janji RS" />
                                </div>
                                <div className="col-2 p-0">
                                    <Kartu image={Solusi4} text="Janji Medis" />
                                </div>
                                <div className="col-2 p-0">
                                    <Kartu image={Solusi5} text="Layanan Homelab" />
                                </div>
                            </div>
                            
                            <div className="pt-2">
                                <KartuAsuransi image={Asuransi}/>
                            </div>
                    </div>

            </div>



            <div className="container" style={{justifyContent: "center"}}>
                <div className="row">
                    <div className="col-12 gap-2">
                    <h1 className="py-3" style={{fontSize: "3vw"}}>Layanan Khusus</h1>
                        <div className="row gap-3 justify-content-center">
                            <div className="col-1">     
                                <Layanan image={Layanan1} text="Layanan Bidan" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Layanan2} text="Tes COVID-19" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Layanan3} text="Perawatan Diabetes" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Layanan4} text="Kesehatan Jantung" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Layanan5} text="Vaksinasi COVID-19" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Layanan6} text="Kesehatan Kulit" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Layanan7} text="Kesehatan Seksual" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Layanan8} text="Kesehatan Mental" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Layanan9} text="Kesehatan Hewan" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Layanan10} text="Parenting" />
                            </div>
                        </div>

                        <h1 className="py-3" style={{fontSize: "3vw"}}>Penunjang Kesehatan</h1>
                        <div className="row gap-3 justify-content-center">
                            <div className="col-1">     
                                <Layanan image={Penunjang1} text="Cek Stress" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Penunjang2} text="Kalender Menstruasi" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Penunjang3} text="kalkulator BMI" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Penunjang4} text="Kalender Kehamilan" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Penunjang5} text="Risiko Jantung" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Penunjang6} text="Risiko Diabetes" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Penunjang7} text="Pengingat Obat" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Penunjang8} text="Donasi" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Penunjang9} text="Tes Depresi" />
                            </div>
                            <div className="col-1">     
                                <Layanan image={Penunjang10} text="Tes Gangguan Kecemasan" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="row">
                    <h1>Penawaran Menarik</h1>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Penawaran image={Penawaran1} />
                    </div>
                    <div className="col-4">
                        <Penawaran image={Penawaran2} />
                    </div>
                    <div className="col-4">
                        <Penawaran image={Penawaran3} />
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div>
                    <h1>Baca Artikel</h1>
                </div>
                <div className="row gap-5">
                    <div className="col-1">
                        <ArtikelBtn text="Terbaru" />
                    </div>
                    <div className="col-1">
                        <ArtikelBtn text="Populer" />
                    </div>
                    <div className="col-1">
                        <ArtikelBtn text="Kanker" />
                    </div>
                    <div className="col-2">
                        <Cacarmbtn text="Cacar Monyet" />
                    </div>
                    <div className="col-1">
                        <ArtikelBtn text="Hepatitis" />
                    </div>
                    <div className="col-1">
                        <ArtikelBtn text="Kehamilan" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-3">
                        <Artikel tittle="6 Menu Sahur Sehat dan Praktis untuk Makan Sahur" image={Artikel1} judul="Makanan Sehat" text="“Agar puasa tetap lancar, kamu harus memperhatikan asupan makanan saat sahur..." />
                    </div>
                    <div className="col-3">
                        <Artikel tittle="Apakah Makan Banyak saat Sahur Bisa Menahan Lapar Lebih Lama?" image={Artikel2} judul="Puasa" text="Beberapa orang yang percaya bahwa makan banyak saat sahur dapat membuat..." />
                    </div>
                    <div className="col-3">
                        <Artikel tittle="Uji Vaksin Sinovac Diklaim Efektif Hingga 80 Persen" image={Artikel3} judul="CoronaVirus" text="Salah satu vaksin yang dapat digunakan untuk mencegah infeksi COVID-19 adalah..." />
                    </div>
                    <div className="col-3">
                        <Artikel tittle="9 Faktor Penyebab Asma yang Harus Diketahui" image={Artikel4} judul="Asma" text="“Walaupun belum diketahui secara pasti penyebabnya, asma dapat dipicu oleh beberapa faktor. Misalnya akibat..." />
                    </div>
                </div>
            </div>

            <div className="container">
                <h1>Obat & Vitamin</h1>
                <p>Dapatkan Informasi seputar kandungan, aturan, kandungan, petunjuk, penggunaan obat dan vitamin disini</p>
                <div className="row">
                    <div className="col-4">
                        <Obat image={Obat1} tittle="Obat & Perawatan" />
                    </div>
                    <div className="col-4">
                        <Obat image={Obat2} tittle="Vitamin & Suplemen" />
                    </div>
                    <div className="col-4">
                        <Obat  image={Obat3} tittle="Ibu & Anak" />
                    </div>
                    <div className="col-4">
                        <Obat image={Obat4} tittle="Susu" />
                    </div>
                    <div className="col-4">
                        <Obat image={Obat5} tittle="Ramadhan" />
                    </div>
                    <div className="col-4">
                        <ObatPenawaran />
                    </div>
                </div>
            </div>

            <div>
                <App image={Logoputih} image1={Googleplay} image2={Appstore} logo={Daftar} />
            </div>
            
        </div>
    )
}

export default Main;