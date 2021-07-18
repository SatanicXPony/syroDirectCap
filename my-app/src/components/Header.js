import capLogo  from './capLogo.png'

function Header() {
  return (
    <header className="sticky-top">
    {/* NavBar Beginning*/}
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3">
        <div className="container-fluid">
            <a className="navbar-brand mx-auto" href={capLogo}>Logo</a> {/*are the a tags supposed to be link tags in react?*/}
            {/* Replace brand w logo, change nav clr */}
        </div>
    </nav>
</header>
  )
}
export default Header;