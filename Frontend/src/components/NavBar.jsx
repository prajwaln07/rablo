import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation();
    
    
    const isLinkActive = (pathname) => location.pathname === pathname;
  
    return (
    <div>
    {/* Navbar start */}
        
        {/*TopBar Start */}
        <div className="container-fluid fixed-top border-bottom ">
   
         {/*TopBar End */}

        <div className="container px-0">
            <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand"><h1 className="text-primary display-6">ApnaDukaan</h1></Link>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars text-primary" />
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                <Link to="/" className={`nav-item nav-link ${isLinkActive('/') ? 'active' : ''}`}>Home</Link>
                <Link to="/shop" className={`nav-item nav-link ${isLinkActive('/shop') ? 'active' : ''}`}>Shop</Link>
           
                </div>
                <div className="d-flex m-3 me-0">
                
                

                <Link  to="/" className="my-auto">
                    <i className="fas fa-user fa-2x" />
                </Link>
                
                </div>
            </div>
            </nav>
        </div>
        </div>
    {/* Navbar End */}
    </div>
  )
}
