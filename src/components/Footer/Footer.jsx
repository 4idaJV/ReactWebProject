import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerSection">
        <img src="../public/imagenes/1.png" alt="Logo" className="footerImage" />
        <p className='textoCopyright'>© Copyright Sazzón 2024</p>
      </div>
      <div className='footerSection'>
        <p className='titles'>RANDOM THINGS</p>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
      <div className='footerSection'>
      <p className='titles'>GET IN TOUCH</p>
        <div className='contactItem'>
          <span className='icon'>✆</span><span className='contactInfo'>928 222 222 222</span>
        </div>
        <div className='contactItem'>
          <span className='icon'>✉</span><span className='contactInfo'>sazzoncontact@gmail.com</span>
        </div>
      </div>
      <div className='footerSection'>
        <p className='titles'>SOCIAL MEDIA</p>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
