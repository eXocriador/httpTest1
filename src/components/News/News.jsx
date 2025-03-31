import { useState, useEffect } from "react";
import axios from "axios";
import ArticlesList from "../ArticlesList/ArticlesList";

const News = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      setArticles(response.data.hits);
      console.log(response);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Cambala articles</h1>
      {articles.length > 0 && <ArticlesList items={articles} />}
    </div>
  );
};

export default News;
