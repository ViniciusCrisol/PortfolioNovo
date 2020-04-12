import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  margin-top: 32px;
  align-items: center;
  text-align: center;

  a {
    font-size: 24px;
    color: white;
    text-decoration: none;
    margin: 12px;
  }
  a:hover {
    color: #f2bf5e !important;
    transition: color 200ms;
  }
  .active {
    font-weight: bold;
    color: #f2bf5e !important;
    border-bottom: 2px solid #f2bf5e;
  }
`;
