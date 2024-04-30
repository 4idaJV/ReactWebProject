import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerSection">
        <img src="../public/imagenes/1.png" alt="Logo" className="footerImage" />
        <p className='textoCopyright'>© Copyright Sazzón 2024</p>
      </div>
      <div className='footerSection'>
        <p className='titles'></p>
        <a href="#"></a>
        <a href="#"></a>
      </div>
      <div className='footerSection'>
      <p className='titles'>GET IN TOUCH</p>
        <div className='contactItem'>
          <span className='icon'>✆</span><span className='contactInfo'>008 222 222 222 222</span>
        </div>
        <div className='contactItem'>
          <span className='icon'>✉</span><span className='contactInfo'>sazzon@gmail.com</span>
        </div>
      </div>
      <div className='footerSection'>
  <p className='titles'>SOCIAL MEDIA</p>
  <div className= 'allSocialBotons'>
    <img src="../public/imagenes/gorjeo.png" alt="Logo" className="socialmediabotons" />
    <img src="../public/imagenes/instagram.png" alt="Logo" className="socialmediabotons" />
    <img src="../public/imagenes/facebook.png" alt="Logo" className="socialmediabotons" />
  </div>
</div>

    </footer>
  );
}

export default Footer;
