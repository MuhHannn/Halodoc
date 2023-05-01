import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App(props) {
  return (
    <MDBFooter style={{backgroundColor: "#369"}} className='text-center text-lg-start text-muted fluid'>

      <section className='d-flex justify-content-center justify-content-lg-between pb-4 pt-4'>
        <MDBCol md="3" lg="4" xl="3" className='mx-5'>
          <img src={props.image} alt="" style={{width: "60%"}}></img>
        </MDBCol>
        <MDBCol md="2" lg="2" xl="2" className='mx-5'></MDBCol>
        <MDBCol md="3" lg="2" xl="2" className='mx-5'></MDBCol>
        <MDBCol md="4" lg="3" xl="1" className='mx-5'></MDBCol>

      </section>

      <section className='' style={{color : "white"}}>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className=''>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>

              <p>
                <h5>Site Map</h5>
              </p>

              <p>
                <a href='#!' className='text-reset'>FAQ</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Blog</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Syarat & Ketentuan</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Kebijakan Privasi</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Promo</a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="3" className='mx-auto mt-4 mb-4'>
              <p></p>
              <p>
                <a href='#!' className='text-reset'>
                  Karir
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Security
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Media
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Coorporate Partnership
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="4" className='mx-auto mt-2 mb-4'>
              <h6 className='fw-bold mb-4'>Layanan Pengaduan Konsumen</h6>
              <p>
                <a href='#!' className='text-reset'>
                    PT Media Dokter Investama
                    Jl. H.R. Rasuna Said Kav B32-33, Jakarta Selatan
                    help@halodoc.com / 021-5095-9900
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
                    Kementerian Perdagangan Republik Indonesia
                    0853 1111 1010 (WhatsApp)
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='fw-bold mb-4'>Download App di</h6>
              <p>
                <a href='' alt=""><img src={props.image1} alt="" style={{width: "43%"}}></img></a>
                <a href='' alt=""><img src={props.image2} alt="" style={{width: "40%"}}></img></a>
              </p>
              <p>
                <h6 className='fw-bold mb-4'>Apakah kamu Dokter?</h6>
              </p>
              <p>
                <a href='' style={{color: "white", backgroundColor: "red", padding: "4% 5%", borderRadius: "5px", fontWeight: "bold"}}>
                  <img src={props.logo}></img>
                  DAFTAR
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center py-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: "white", alignItems: "center", textAlign: "center"}}>
        <MDBRow className='mx-auto'>
          <MDBCol>
            <h6>©HALODOC, 2023. ALL RIGHTS RESERVED</h6>
          </MDBCol>
          <MDBCol>
            <h6 className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              Follow kami di:          
              <a href='https://twitter.com/?lang=id' alt="" style={{color: "white", fontSize: "100%"}}><MDBIcon fab icon="twitter" className='mx-2' /></a>
              <a href='' alt="" style={{color: "white", fontSize: "100%"}}><MDBIcon fab icon="facebook-f" className='mx-2'  /></a>
              <a href='' alt="" style={{color: "white", fontSize: "100%"}}><MDBIcon fab icon="instagram" className='mx-2'  /></a>
              <a href='' alt="" style={{color: "white", fontSize: "100%"}}><MDBIcon fab icon="youtube" className='mx-2'  /></a>
            </h6>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBFooter>
  );
}