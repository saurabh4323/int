// src/ArticleSearch.js
import React, { useState, useEffect } from "react";

const ArticleSearch = () => {
  const [articleNumber, setArticleNumber] = useState("");
  const [articleData, setArticleData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (articleNumber) {
      fetch(`/article.json`)
        .then((response) => response.json())
        .then((data) => {
          const article = data.articles.find(
            (article) => article.number === articleNumber
          );
          if (article) {
            setArticleData(article);
            setError(null);
          } else {
            setArticleData(null);
            setError("Article not found.");
          }
        })
        .catch(() => setError("Failed to fetch data."));
    }
  }, [articleNumber]);

  const handleChange = (e) => {
    setArticleNumber(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Constitution Article Explainer</h1>
      <input
        type="text"
        value={articleNumber}
        onChange={handleChange}
        placeholder="Enter article number"
        style={{ marginRight: "10px" }}
      />
      <button onClick={() => setArticleNumber(articleNumber)}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {articleData && (
        <div>
          <h2>{articleData.title}</h2>
          <p>
            <strong>Explanation:</strong> {articleData.explanation}
          </p>
          <p>
            <strong>Example:</strong> {articleData.example}
          </p>
        </div>
      )}
    </div>
  );
};

export default ArticleSearch;
