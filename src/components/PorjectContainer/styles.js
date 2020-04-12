import styled from 'styled-components';

export const Item = styled.div`
  width: 90s;
  margin: 4px;
  max-width: 340px;
  height: auto;
  background-color: white;
  box-shadow: 4px 4px 6px -2px rgba(0, 0, 0, 0.45);

  a {
    text-decoration: none;
    color: #2e3159;
  }

  img {
    height: 100%;
    width: 100%;
    background: #eee;
  }
  footer {
    padding: 6px;
    padding-top: 0;
    width: 100%;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      > h3 {
        margin: 0 2px;
      }
    }

    h3 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
      line-height: 18px;
    }
  }
  &:hover {
    background-color: #f1f1f1;
    transition: 200ms;
  }
`;
