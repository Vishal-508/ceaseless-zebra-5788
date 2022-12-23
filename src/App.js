
import './App.css';
import Footer from './Components/Footer/Footer';
import MainRoute from './Routes/MainRoute';
import ScrollToTop from "react-scroll-to-top"



function App() {
  return (
    <div className="App" >
         <ScrollToTop smooth className="scrolltop_icon"/>

      <MainRoute />
      <Footer />
    </div>
  );
}

export default App;
