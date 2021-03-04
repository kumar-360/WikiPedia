import React, { useState, useEffect } from "react";
import "./style.css";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    if (term && !results.length) {
      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`
      )
        .then((response) => response.json())
        .then((data) => setResults(data.query.search));
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          fetch(
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`
          )
            .then((response) => response.json())
            .then((data) => setResults(data.query.search));
        }
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedItems = results.map((result) => {
    return (
      <div className="rendered-item" key={result.pageid}>
        <div className="rendered-title">
          {result.title}
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            <button style={{ float: "right" }}>Go</button>
          </a>
        </div>
        <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
      </div>
    );
  });

  return (
    <div>
      <label>Enter term:</label>
      <br />
      <input
        type="text"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      {renderedItems}
    </div>
  );
};

export default Search;
