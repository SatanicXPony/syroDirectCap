import capLogo from '../assets/images/capLogo.png';

{/* will i need to useState for every page that uses reactstrap? */}

function Header() {
  return (
    <header className="sticky-top">
    {/* NavBar Beginning*/}
    <nav className="navbar navbar-expand-lg navbar-light style={{background-color: '#e3f2fd'}} py-3">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={ capLogo } alt="mainLogo" width="90px" height="60px"/>
              </a> {/* Replace brand w logo, change nav clr */}
        </div>
    </nav>
</header>
  )
};

export default Header;