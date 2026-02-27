import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">🎧 Podcastify</h2>

      <nav className="menu">
        <Link to="/" className="menu-item">🏠 Home</Link>
        <Link to="/upload" className="menu-item">⬆ Upload</Link>
        <Link to="/account" className="menu-item">👤 Account</Link>
        <Link to="/premium" className="menu-item">💎 Premium</Link>
        <Link to="/about" className="menu-item">ℹ About</Link>
      </nav>
    </div>
  );
}

export default Sidebar;