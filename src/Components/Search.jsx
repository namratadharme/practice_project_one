import React, { useState, useEffect } from "react";
import "../Style/search.css";
import { debounce } from "lodash";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const debounceValue = debounce((e) => {
    const query = e.target.value;
    setQuery(query);
  }, 1000);

  useEffect(() => {
    console.log("api calls");
    if (query.length >= 3) {
      const tempArray = [];
      for (let i = 1; i <= 4; i++) {
        tempArray.push({
          name: `Result for ${query} ${i}`,
        });
      }
      setResult(tempArray);
    } else {
      setResult([]);
    }
  }, [query]);

  return (
    <>
      <div className="search-bar-container">
        <input
          onChange={debounceValue}
          type="text"
          className="search-input"
          placeholder="search"
        ></input>

        {result.length > 0 ? (
          <div className="search-result">
            {result.map((item, index) => (
              <div className="search-item">{item.name}</div>
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
