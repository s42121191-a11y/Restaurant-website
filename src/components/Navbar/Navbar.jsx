import "./Navbar.css";

function Navbar() {
  return (
    <>
    
    <nav className="navbar">
      
      <div className="logo">
        <h2>🍕 Bella Vista</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="btn">Book a Table</button>
    </nav>
  
   </>
  );
}

export default Navbar;