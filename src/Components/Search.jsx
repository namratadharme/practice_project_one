import React, { useState, useEffect } from "react";
import "../Style/search.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  function handleInput(e) {
    const Query = e.target.value;
    setQuery(Query);
  }

  useEffect(() => {
    if (query.length >= 3) {
      const tempArray = [];
      for (let i = 0; i < 4; i++) {
        tempArray.push({
          id: i,
          name: `Result for ${query}`,
          value: `${i + 1}`,
        });
      }
      setResult(tempArray);
    } else {
      setResult([]);
    }

    console.log(query);
    console.log(result);
  }, [query]);

  return (
    <>
      <div className="search-bar-container">
        <input
          onChange={handleInput}
          type="text"
          className="search-input"
          placeholder="search"
        ></input>

        {result.length > 0 ? (
          <div className="search-result">
            {result.map((item) => (
              <div key={item.id} className="search-item">
                {item.name} {item.value}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default SearchBar;
