import styled from "styled-components";

const StyledNavbar = styled.div`
  font-family: "Heebo", sans-serif;
  background-color: #c4453b;
  padding: 0 2rem;

  .navbar-brand {
    font-size: 25px;
    font-weight: 700;

    .react-icons {
      color: white;
    }
  }
`;

const StyledNav = styled.div`
  li {
    font-size: 19px;
    color: white;

    .react-icons {
      color: white;
    }
  }
`;

export { StyledNavbar, StyledNav };
