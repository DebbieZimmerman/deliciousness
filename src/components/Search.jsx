import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searchresults/' + input)
  }

  return (
    <FormStyled onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
    margin: 1rem 5rem;
    justify-content: center;
    align-items:center;
        
    div{
        width: 100%;
        position: relative;
        align-items: center;
    }
    input{
        padding: .5rem 2rem;
        border: none;
        background: linear-gradient(35deg, #8B939A, #5B6467);
        font-size: 1.5rem;
        color: white;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search;
