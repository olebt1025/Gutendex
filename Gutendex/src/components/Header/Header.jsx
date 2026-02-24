import { Link } from "react-router-dom";
import { useState } from "react";
import "./HeaderStyle.css";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <header className="header">
      <h1>📚Bøker mann</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Søk
        </button>
      </form>

      <nav className="nav-links">
        <Link to="/">Hjem</Link>
        <Link to="/favorites">Favoritter</Link>
      </nav>
    </header>
  );
}

export default Header;