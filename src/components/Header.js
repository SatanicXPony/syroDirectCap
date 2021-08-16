import Logo from '../assets/images/Logo.svg';
//import {Image } from "react-bootstrap/Image";
//import './Header.scss';

function Header() {
  return (
    <div className="sticky-top">
    {/* NavBar Beginning*/}
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="mainLogo" style={{height: 70 }}/>
        </a> 
        <button class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarToggler" 
        aria-controls="navbarToggler" 
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
        <div className="d-flex">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
        </div>
        </div>
      </nav>
    </div>
</div>
  )
};

export default Header;