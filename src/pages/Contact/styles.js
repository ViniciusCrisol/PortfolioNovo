import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 200px;
  text-align: center;

  h2 {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 16px;
  }

  p,
  a {
    margin: 8px 0;

    font-size: 20px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 8px;
    }
  }
`;
