import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const CategoriesStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 768px;
  gap: 20px;
  margin: 0 auto;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
  }
`;

const NavLinkStyle = styled(NavLink)`
  font-size: 1.125rem;
  white-space: pre;
  padding: 0.25rem 0;
  &:hover {
    color: #333 !important;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #46b9d0;
    color: #46b9d0;
  }
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

const Category = () => {
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

export default Category;
