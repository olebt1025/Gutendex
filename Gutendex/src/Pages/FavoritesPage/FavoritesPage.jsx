import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./FavoritesPageStyle.css";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  // Remove a book from favorites
  const removeFavorite = (bookId) => {
    const updated = favorites.filter((b) => b.id !== bookId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <>
      <Header />

      <div className="favorites-container">
        <h2>Your Favorite Books</h2>

        {favorites.length === 0 && <p>No favorites yet.</p>}

        <ul className="favorites-list">
          {favorites.map((book) => (
            <li key={book.id} className="favorite-item">
              <h3>{book.title}</h3>
              <p>{book.authors.map((a) => a.name).join(", ")}</p>
              <button
                className="remove-favorite-btn"
                onClick={() => removeFavorite(book.id)}
              >
                ❌ Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FavoritesPage;