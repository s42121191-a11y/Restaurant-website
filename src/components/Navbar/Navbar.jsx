import "./Navbar.css";
import logo_1 from '../../assets/images/logo_1.png'
function Navbar() {
  return (
    <>
    
    <nav  className="navbar">
      
      <div className="w_name">
      <h2><img width="52" height="52" src="https://img.icons8.com/windows/32/redhat.png" alt="redhat"/> Bella Vista</h2>
      </div>

      <ul className="nav_links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
        </ul> 
        <div>
        </div>
          <button className="btn">Book a Table</button>
    </nav>
  
   </>
  );
}

export default Navbar;