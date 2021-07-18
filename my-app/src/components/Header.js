import slide1  from '../public/slide1.jpg'

function Header() {
  return (
    <header className="sticky-top">
    {/* NavBar Beginning*/}
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3">
        <div className="container-fluid">
            <a className="navbar-brand mx-auto" href="#">
              <img src="/public/slide1.jpg" width="50" height="40"/>
              </a> {/*are the a tags supposed to be link tags in react?*/}
            {/* Replace brand w logo, change nav clr */}
        </div>
    </nav>
</header>
  )
}
export default Header;