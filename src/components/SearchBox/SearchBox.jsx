import css from "./SearchBox.module.css";

function SearchBox({ value, onSearch }) {
  const handleTextSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={css.inputBox}>
      <input
        value={value}
        onChange={handleTextSearch}
        className={css.input}
        type="text"
        placeholder="Please write text"
      />
      <p>{value}</p>
    </div>
  );
}

export default SearchBox;
