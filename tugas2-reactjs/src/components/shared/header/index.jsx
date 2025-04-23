import { Link } from "react-router";

export default function Header(){
    return (
        <>
     <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between py-3 w-100">
          
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
            <span className="ms-2 fs-4 text-white">Bookstore</span>
          </div>

         
          <ul className="nav mb-2 mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-primary">Home</Link></li>
            <li><Link to="/Books" className="nav-link px-2 text-primary">Books</Link></li>
            <li><Link to="/Teams" className="nav-link px-2 text-primary">Teams</Link></li>
            <li><Link to="/Contacts" className="nav-link px-2 text-primary">Contacts</Link></li>
          </ul>

      
          <div className="text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </nav>
  
        </>
    )
}