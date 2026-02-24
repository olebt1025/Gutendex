import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import BookDetailPage from "./pages/BookDetailPage/BookDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/book/:id" element={<BookDetailPage />} />
    </Routes>
  );
}

export default App;