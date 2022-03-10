import './App.css';
import Header from './Header/Header'
import Hero from './Header/Hero'
import FeaturedProduct from './Products/FeaturedProduct'
import Footer from './Footer/Footer'
import 'bulma/css/bulma.min.css';
// import Wrapper from './Header/Wrapper'


function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <FeaturedProduct />
     <Footer />
    </div>
  );
}

export default App;
