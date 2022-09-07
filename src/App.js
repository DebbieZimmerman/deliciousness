import Pages from "./pages/Pages";
import Category from "./components/Category";
import { NavLink, BrowserRouter } from 'react-router-dom'
import Search from "./components/Search";
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
        <Search />
        <Category />
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
  // color: #0CAC19;
  background: -webkit-linear-gradient(#043A08, #58CD36);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Nav =styled.div`
  color: #043A08;

  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
      background: -webkit-linear-gradient(#043A08, #71D91C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
`

export default App;
