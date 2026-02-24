import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import FavoritesButton from "../../components/FavoritesButton/FavoritesButton";
import "./BookDetailPageStyle.css";

function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  
  const coverImage =
    book.formats["image/jpeg"] ||
    book.formats["image/png"] ||
    null;

  
  const digitalLink =
    book.formats["application/pdf"] ||
    book.formats["text/html; charset=utf-8"] ||
    Object.values(book.formats)[0];

  return (
    <>
      <Header />
      <div className="book-detail-container">
        <h2 className="book-title">{book.title}</h2>

        {coverImage && (
          <img
            src={coverImage}
            alt={book.title}
            className="book-cover"
          />
        )}

        <p>
          <strong>Author:</strong> {book.authors.map(a => a.name).join(", ")}
        </p>

        <p>
          <strong>Number of downloads:</strong> {book.download_count}
        </p>

        <p>
          <strong>Category:</strong> {book.subjects.join(", ")}
        </p>

        <p>
          <strong>Languages:</strong> {book.languages.join(", ")}
        </p>

        {digitalLink && (
          <p>
            <strong>Read/Download:</strong>{" "}
            <a href={digitalLink} target="_blank" rel="noopener noreferrer">
              Click here
            </a>
          </p>
        )}

        <FavoritesButton book={book} />

        <Link to="/" className="back-link">
          ← Tilbake
        </Link>
      </div>
    </>
  );
}

export default BookDetailPage;