import React from "react";
import NewsList from "../components/NewsList";
import Categorys from "../components/Categorys";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";

  return (
    <div>
      <h2>뉴스 목록 페이지입니다.</h2>
      <Categorys />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
