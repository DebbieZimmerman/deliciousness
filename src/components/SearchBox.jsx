import Search from "./Search";
import Category from "./Category";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  return (
    <BoxStyled>
      <Search />
      <Category />
    </BoxStyled>
  );
}

const BoxStyled = styled.div`
  padding: 1rem 20vw;
  justify-content: center;
  align-items: center;
  background-color: #FFFF66;
`;

export default SearchBox;
