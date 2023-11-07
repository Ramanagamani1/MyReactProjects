import { useEffect, useRef } from "react";

function Search({ query, setQuery }) {
  const inputRef = useRef(null);

  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputRef.current) return;

      if (e.code === "Enter") {
        inputRef.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      ref={inputRef}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
