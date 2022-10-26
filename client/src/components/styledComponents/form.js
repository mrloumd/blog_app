import styled from "styled-components";

const AuthForm = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;

  .form_container {
    width: 30%;
    padding: 2rem;
    align-self: center;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    .heading {
      p {
        font-size: 18px;
      }
    }

    .form-group {
      margin: 1rem;

      button {
        background-color: #c4453b;
        width: 100%;
        font-weight: 600;

        :hover {
          color: white;
        }
      }
    }
  }

  @media (max-width: 950px) {
    .form_container {
      width: 90%;
    }
  }
`;

const BlogForm = styled.form``;

const ModalForm = styled.div`
  .form-container {
    padding: 0 1rem;

    .form-group {
      margin: 1rem 0;

      input {
        border-radius: 10px;
      }
      textarea {
        border-radius: 10px;
      }
    }
  }

  .button-container {
    .modal-footer {
      padding: 0.5rem 0 0 0;
    }
  }
`;

export { AuthForm, BlogForm, ModalForm };
