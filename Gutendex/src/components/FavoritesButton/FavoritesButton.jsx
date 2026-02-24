import "./FavoritesButtonStyle.css";

function FavoritesButton({ book }) {
  const addFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.find(b => b.id === book.id);

    if (!exists) {
      favorites.push(book);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <button className="favorite-btn" onClick={addFavorite}>
      ❤️ Favorite
    </button>
  );
}

export default FavoritesButton;