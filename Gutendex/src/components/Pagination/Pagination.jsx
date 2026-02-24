import "./PaginationStyle.css";

function Pagination({ next, previous, onPageChange }) {
  return (
    <div className="pagination">
      <button
        disabled={!previous}
        onClick={() => onPageChange(previous)}
      >
        Previous
      </button>

      <button
        disabled={!next}
        onClick={() => onPageChange(next)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;