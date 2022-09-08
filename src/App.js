import Pages from "./pages/Pages";
import Category from "./components/Category";
import { NavLink, BrowserRouter } from 'react-router-dom'
import SearchBox from "./components/SearchBox";
import styled from "styled-components"
import {SiJusteat} from "react-icons/si"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <SiJusteat />
        <Logo to={'/'}>Deliciousness</Logo>
      </Nav>
        <SearchBox />

        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: Montserrat;
  background: -webkit-linear-gradient(25deg, #F52A2A, #f27121, #EDF42A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Nav =styled.div`
  color: #F52A2A;
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`

export default App;
