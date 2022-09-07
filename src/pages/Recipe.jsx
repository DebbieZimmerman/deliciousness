import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    console.log(detailData)
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  margin-top: 5vh;
  margin-bottom: 2vh;
  display: flex;
  .active {
    background: linear-gradient(35deg, #8b939a, #5b6467);
    color: white;
  }
  img{
    max-width: 50vh;
    max-height: auto;
  }
  h2 {
    margin-bottom: 1vh;
  }
  h3 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.7rem;
  }
  li {
    font-seize: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2vh;
  }
`;
const Button = styled.button`
  padding: 1vh 1vh;
  color: #5b6467;
  background: white;
  border: 2px solid black;
  margin-right: 2vh;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 2rem;
`;

export default Recipe;
