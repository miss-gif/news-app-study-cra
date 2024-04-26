import React from "react";
import NewsList from "../components/NewsList";
import Category from "../components/Category";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";

  return (
    <div>
      <h2>뉴스 목록 페이지입니다.</h2>
      <Category />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
