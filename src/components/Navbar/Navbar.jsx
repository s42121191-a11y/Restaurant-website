import "./Navbar.css";

function Navbar() {
  return (
    <>
    
    <nav  className="navbar">
      
      <div className="w_name">
        🍕 Bella Vista
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