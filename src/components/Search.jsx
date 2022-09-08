import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Category from "./Category";
import Checkbox from "./Checkbox"
import { diet } from "../utils/diet";
import { intolerances } from "../utils/intolerances";
import { cuisine } from "../utils/cuisine";

function Search() {
  const [input, setInput] = useState("")

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searchresults/' + input)
  }

  return (
    <FormStyled onSubmit={submitHandler} >
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
      {/* <div>
        <Grid>
          {diet.map((type) => {
            return(
              <Checkbox label={type.displayTerm} />
            )
          })}
        </Grid>
      </div> */}
    </FormStyled>
  );
}

const FormStyled = styled.form`
    justify-content: center;
    align-items:center;
        
    div{
        width: 100%;
        position: relative;
        align-items: center;
    }
    input{
        padding: .5rem 2rem;
        margin-left: .5rem;
        border: none;
        box-shadow: .5px 1px 1px .5px #FACF0F;
        background: white;
        font-size: 1.5rem;
        color: dark-gray;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #FACF0F;
    }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-gap: 1 vh;

  input{
    padding: .5rem .5rem;
    margin-left: .5rem;
    border: none;
    box-shadow: .5px 1px 1px .5px #FACF0F;
    background: white;
    font-size: 1.5rem;
    color: dark-gray;
    border-radius: 1rem;
    outline: none;
    width: 100%;
}
`;

export default Search;
