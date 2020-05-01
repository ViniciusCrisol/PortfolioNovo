import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  position: relative;

  max-width: 380px;
  width: 90%;
  height: 290px;
  margin: 8px 6px;

  background-color: ${(props) => props.color};
  box-shadow: 4px 4px 6px -2px rgba(0, 0, 0, 0.35);
  color: #2e3159;
  text-decoration: none;

  display: flex;
  justify-content: left;

  img {
    margin-top: 14px;
    height: 180px;
    position: absolute;
    right: 0;
    bottom: 88px;
    background: rgba(255, 255, 255, 0.6);
    border-left: white solid 8px;
    border-top: white solid 8px;
  }

  footer {
    background: white;
    bottom: 0;
    position: absolute;
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
        display: flex;
        align-items: center;
        margin: 0 2px;
      }
    }

    h3 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
      line-height: 18px;
      max-width: 260px;
    }
  }
  &:hover {
    footer {
      transition: 200ms;
      background: ${darken(0.04, 'white')};
    }
  }
`;
