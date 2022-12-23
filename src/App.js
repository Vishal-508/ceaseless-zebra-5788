
import './App.css';
import Footer from './Components/Footer/Footer';
import MainRoute from './Routes/MainRoute';
import ScrollToTop from "react-scroll-to-top"
import Topimage from './Components/TopImage/Topimage';
import NavBar from './Components/Navbar';



function App() {
  return (
    <div className="App" >
      
         <ScrollToTop smooth className="scrolltop_icon"/>
         <NavBar/>
      <Topimage />
      <MainRoute />
     
      <Footer />
    </div>
  );
}

export default App;
