import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  position: relative;

  max-width: 380px;
  width: 90%;
  height: 120px;
  margin: 8px 6px;
  padding: 12px;
  border-radius: 12px;

  background: linear-gradient(
    90deg,
    rgba(43, 87, 117, 1) 0%,
    rgba(78, 67, 118, 1) 100%
  );

  box-shadow: 4px 4px 6px -2px rgba(0, 0, 0, 0.35);
  color: white;
  text-decoration: none;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    font-size: 26px;
  }

  p {
    font-size: 16px;
    line-height: 18px;
    max-width: 260px;
  }

  &:hover {
    footer {
      transition: 200ms;
      background: ${darken(0.04, 'white')};
    }
  }
`;

export const Track = styled.div`
  top: 0;
  right: 0;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  width: 20%;
  height: 100%;
  position: absolute;
  border-left: 4px solid white;

  background: ${(props) => props.color};

  span {
    margin: 0 auto;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h2 {
      background: white;
      padding: 4px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2px 0;
    }
  }
`;
