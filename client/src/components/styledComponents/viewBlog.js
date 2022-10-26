import styled from "styled-components";

const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BLogCard = styled.div`
  width: 1000px;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  .blog-btn {
    display: flex;
    justify-content: flex-end;
  }

  .blog-content {
    h1 {
      font-size: 35px;
    }

    .blog-description {
      font-size: 25px;
    }

    .user-name {
      font-size: 15px;
    }
  }
`;

export { BlogContainer, BLogCard };
