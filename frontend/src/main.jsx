import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>
);
