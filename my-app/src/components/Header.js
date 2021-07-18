import capLogo from '../assets/images/capLogo.png';

{/*will i need to useState for every page that uses reactstrap?*/}

function Header() {
  return (
    <header className="sticky-top">
    {/* NavBar Beginning*/}
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container-fluid">
            <a className="navbar-brand mx-auto" href="/">
              <img src={capLogo} alt="mainLogo" width="90px" height="90px"/>
              </a> {/*are the a tags supposed to be link tags in react?*/}
            {/* Replace brand w logo, change nav clr */}
        </div>
    </nav>
</header>
  )
}
export default Header;