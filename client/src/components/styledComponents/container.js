import styled from "styled-components";

const StyledContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  margin: 1rem;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 1rem;

  .user-blog {
    align-self: center;

    .blog-btn {
      display: flex;
      justify-content: flex-end;
    }

    .user-name {
      align-items: flex-end;
      font-weight: 600;
    }
  }
`;

export { StyledContainer, StyledCard };
