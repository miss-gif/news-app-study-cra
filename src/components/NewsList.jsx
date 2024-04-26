import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { BounceLoader } from "react-spinners";

const NewsListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
  width: 768px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const host = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        const response = await axios.get(host);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
        setArticles([]); // Empty array to indicate no articles
      }
      setLoading(false);
    };
    getData();
  }, [category]); // Dependency added to re-run effect when category changes

  if (loading) {
    return (
      <NewsListStyle>
        <BounceLoader color="#36d7b7" cssOverride={{ position: "absolute", left: "50%", top: "50%" }} size={100} />
      </NewsListStyle>
    );
  }

  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <NewsListStyle>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListStyle>
  );
};

export default NewsList;
