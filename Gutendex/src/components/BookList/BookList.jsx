import { Link } from "react-router-dom";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import "./BookListStyle.css";

function BookList({ books }) {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-item">
          {/* Wrap the title in a Link to detail page */}
          <Link to={`/book/${book.id}`} className="book-title-link">
            <h3>{book.title}</h3>
          </Link>

          <p>{book.authors.map((a) => a.name).join(", ")}</p>

          <FavoritesButton book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;