import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 200px;
  text-align: center;

  h2 {
    font-weight: bold;
    font-size: 24px;
  }

  p {
    max-width: 460px;
    margin: 12px auto;
    font-size: 18px;
    line-height: 28px;
  }

  > a {
    font-size: 20px;
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 2px solid;

    &:hover {
      color: ${darken(0.2, '#f2bf5e')};
      transition: color 200ms;
    }
  }
  div {
    margin: 60px auto 0;
    text-align: center;

    > a {
      margin: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 18px;
      color: #6064a8;
      transition: 200ms;
    }

    svg {
      margin-right: 4px;
    }
  }
`;
