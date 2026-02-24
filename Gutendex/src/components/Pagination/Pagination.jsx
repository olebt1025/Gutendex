import "./PaginationStyle.css";

function Pagination({ next, previous, onPageChange }) {
  return (
    <div className="pagination">
      <button
        disabled={!previous}
        onClick={() => onPageChange(previous)}
      >
        Forrige
      </button>

      <button
        disabled={!next}
        onClick={() => onPageChange(next)}
      >
        Neste
      </button>
    </div>
  );
}

export default Pagination;