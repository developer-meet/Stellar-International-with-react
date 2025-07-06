import "./App.css";
import logo from "./assets/Logo.png";

function App() {
  return (
    <>
      <div className="home-sec">
        <header className="header d-flex align-items-center justify-content-between">
          <div className="header-logo-sec d-flex align-items-center">
            <img  src={logo} alt="" />
          </div>
          <div className="header-menu-sec d-flex align-items-center">
            <ul className="d-flex justify-content-around w-100">
              <li>
                <a className="sim-orange-color poppins" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="sim-orange-color poppins" href="">
                  About Us
                </a>
              </li>
              <li>
                <a className="sim-orange-color poppins" href="">
                  Packages
                </a>
              </li>
              <li>
                <a className="sim-orange-color poppins" href="">
                  Themes{" "}
                </a>
              </li>
              <li>
                <a className="sim-orange-color poppins" href="">
                  Visa
                </a>
              </li>
              <li>
                <a className="sim-orange-color poppins" href="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </header>

        <p className="poppins">Best Destinations around the world</p>
        <p>Travel, enjoy and live a new and full life</p>
      </div>
      yrtu
    </>
  );
}

export default App;
