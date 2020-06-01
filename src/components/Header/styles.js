import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 100%;
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  a {
    font-size: 24px;
    color: white;
    text-decoration: none;
    margin: 12px;

    &:hover {
      color: #f2bf5e;
      transition: color 200ms;
    }
  }

  .active {
    font-weight: bold;
    color: #f2bf5e;
    border-bottom: 2px solid #f2bf5e;
  }
`;
