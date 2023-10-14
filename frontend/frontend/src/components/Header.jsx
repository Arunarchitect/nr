import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Modelflick.com | Planning Assistance</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <ul className="dropdown-menu ">
                <li><Link className='dropdown-item' to= '/user-login'>Login</Link></li>
                <li><Link className='dropdown-item' to= '/user-register'>Register</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className='dropdown-item' to= '/user-dashboard'>Dashboard</Link></li>
                <li><Link className='dropdown-item' to= '/user-login'>Logout</Link></li>
              </ul>
            </li> */}
            
            <li className="nav-item">
              <Link className="nav-link active" to="/blog">Blog</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" to="#">Contact us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pay">Pay</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/enquiry">Enquiry</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
