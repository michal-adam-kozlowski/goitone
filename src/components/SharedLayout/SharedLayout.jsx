import { styled } from "styled-components"
import { NavLink, Outlet } from "react-router-dom"

const StyledLink = styled(NavLink)`
  color: black;
  padding: 4px;
  
  &.active {
    color: orange;
  }
`

const StyledFrame = styled.div`
  border: 1px solid black;
`

const Container = styled.div`
  padding: 16px;
  background-color: lightblue;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
`



export const SharedLayout = () => {

    return (<Container>
        <Header>
        <span role="img" aria-label="computer icon">
              💻
            </span>{" "}
            GoMerch Store
        
      <div>
        <div>
          <StyledLink to="/" end>Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </div>
      </div>
      </Header>
      <Outlet/>
      </Container>)
}