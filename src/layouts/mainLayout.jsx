import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header1.jsx';
import './Root.css'; 

const Root = () => {
  return (
    <div className='layout'>
      <Header className="HeaderComponent"/>
    
        <Outlet className='content'/>
    
      {/* <Footer /> */}
    </div>
  );
}

export default Root;
