import "./CategoryDropdownStyle.css";

const categories = [
  "fiction",
  "mystery",
  "thriller",
  "romance",
  "fantasy",
  "morality",
  "society",
  "power",
  "justice",
  "adventure",
  "tragedy",
  "war",
  "philosophy"
];

function CategoryDropdown({ onCategorySelect }) {
  return (
    <div className="category-container">
      <select
        className="category-dropdown"
        onChange={(e) => onCategorySelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Kategori
        </option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropdown;