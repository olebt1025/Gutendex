import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import BookList from "../../components/BookList/BookList";
import Pagination from "../../components/Pagination/Pagination";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState("https://gutendex.com/books");

  const fetchBooks = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setCurrentUrl(url);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchBooks(currentUrl);
  }, []);

  // Search books
  const handleSearch = (query) => {
    fetchBooks(`https://gutendex.com/books?search=${query}`);
  };

  // Filter by category
  const handleCategory = (category) => {
    fetchBooks(`https://gutendex.com/books?topic=${category}`);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <CategoryDropdown onCategorySelect={handleCategory} />
      <BookList books={books} />
      <Pagination
        next={nextUrl}
        previous={prevUrl}
        onPageChange={fetchBooks}
      />
    </>
  );
}

export default HomePage;