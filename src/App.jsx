import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import productData from './productData';
// import ProductItem from './components/ProductItem';

function App() {

  
  return (
    <div className="App">

      <Navbar/>
      {/* <ProductItem productData = {productData} /> */}
      <Products productData = {productData}/>

      <Footer/>
    </div>
  );
}

export default App;
