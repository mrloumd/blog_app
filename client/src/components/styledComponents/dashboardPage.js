import styled from "styled-components";

const StyledPage = styled.div`
  .addBlog {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    .addBlog-btn {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      color: gray;
      width: 100%;
      background-color: rgba(192, 192, 192, 0.1);

      :hover {
        cursor: text;
        background-color: rgba(192, 192, 192, 0.4);
      }
    }
  }

  .blogs-card {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .userBlog-container {
    .blogs-container {
      width: 50%;

      .blog-card {
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }
    }

    @media (max-width: 900px) {
      .blogs-container {
        width: 80%;
      }
    }
  }
`;

export { StyledPage };
