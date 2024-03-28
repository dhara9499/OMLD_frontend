import './App.css';
import Footer from './pages/Footer/Footer.js';
import Home from './pages/Home/Home.js';
import Header from "./components/Navbar/Narbar.js";
import AddNewProducts from './pages/Product/AddNewProducts';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import axios from 'axios';

function App() {
  const csrfToken = document.getElementById('root').getAttribute('data-csrf-token');

axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    return (
      <div class='omld'>
        <Router>
          <div class="header"><Header /></div>
          <div class="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/products/addNewProducts' element={<AddNewProducts />}/>
            </Routes>
          </div>
        </Router>
        <div class="footer">
          <Footer/>
        </div>
    </div>
  );
}

export default App;
