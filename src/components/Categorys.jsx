import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesStyle = styled.div`
  display: flex;
  gap: 15px;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    /* display: flex;
    flex-wrap: wrap; */
  }
`;

const NavLinkStyle = styled(NavLink)`
  font-size: 1.125rem;
  white-space: pre;
  padding-bottom: 0.25rem;

  &:hover {
    color: #ababab;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
  }

  /* ${props =>
    props.active &&
    css`
      font-weight: 600;
      border: 2px solid #22b8cf;
      color: #22b8cf;
    `} */
`;

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const Categories = () => {
  return (
    <CategoriesStyle>
      {categories.map(category => (
        <NavLinkStyle key={category.name} to={category.name === "all" ? "/" : `/${category.name}`}>
          {category.text}
        </NavLinkStyle>
      ))}
    </CategoriesStyle>
  );
};

export default Categories;
