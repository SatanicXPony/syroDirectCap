import Logo from '../assets/images/Logo.svg';
//import {Image } from "react-bootstrap/Image";

function Header() {
  return (
    <div className="sticky-top">
    {/* NavBar Beginning*/}
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <a className="navbar-brand" href="/">
          <img src={ Logo } alt="mainLogo" fluid />
        </a> {/* Replace brand w logo, change nav clr */}
        <button class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarToggler" 
        aria-controls="navbarToggler" 
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
        </div>
      </nav>
    </div>
</div>
  )
};

export default Header;