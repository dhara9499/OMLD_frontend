import './App.css';
import Footer from './pages/Footer/Footer.js';
import Home from './pages/Home/Home.js';

import Header from "./components/Navbar/Narbar.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
      <div class='omld'>
        <Router>
          <div class="header"><Header /></div>
          <div class="content">
            <Routes>
                <Route path="/" element={<Home />} />
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
