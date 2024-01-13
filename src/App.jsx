import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/navbar';
import DashBoard from './Components/dashboard';
import Products from './Components/products';
import About from './Components/about';
import ContactUs from './Components/contactus';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
};

export default App;
