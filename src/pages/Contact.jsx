import React from 'react'
import Iframe from 'react-iframe';
import logo from '../assets/Berk_edited.png'

const Contact = () => {
  return (
    <div style={{display:"flex" }}>

      <div style={{width:"50%"}}>
        <div>
          <div >
            <img className='logo' src={logo} alt="" />
          </div>
          <h1>Bize Ulaşın</h1>
          <p >BERK İNTERAKTİF YAZILIM SİSTEMLERİ. LTD. ŞTİ.</p>
          
          <div className='line'>___</div>
          <p>Hoşnudiye Mah. İsmet İnönü 1 CAD. 732 Sok. Bulvar 28 Plaza No:28 Kat:7 Daire:62 Tepebaşı/Eskişehir</p>
        </div>
      </div>

      <div style={{ width: "50%", marginTop: "0rem" }}>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12264.263537425357!2d30.5043534!3d39.7830768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc178afd44ab9b%3A0xa7c9649588c5b20f!2zQmVyayDEsG50ZXJha3RpZiBZYXrEsWzEsW0gU2lzdGVtbGVyaSB8IFZlZ2EgWWF6xLFsxLFt!5e0!3m2!1str!2str!4v1682783388806!5m2!1str!2str"
          width="100%" height="450" style="border:0;"/>
      </div>
    </div>
  )
}

export default Contact