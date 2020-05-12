import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  position: relative;

  max-width: 300px;
  width: 90%;
  min-height: 240px;
  height: auto;

  margin: 8px 6px;
  padding: 32px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 4px 4px 10px -2px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  text-decoration: none;

  > section {
    background-color: ${(props) => props.color};
    width: 30px;
    height: 30px;
    position: absolute;
    transform: scale(1);
    transition: 280ms;

    right: 0;
    bottom: 0;
    border-top-left-radius: 50%;
  }

  span {
    display: flex;
    padding-bottom: 12px;
    border-bottom: 1px solid #eee;

    h2 {
      line-height: 1;
      width: 44px;
      height: 44px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      & + h2 {
        margin-left: 4px;
      }
    }
  }

  &:hover {
    section {
      transform: scale(19);
      opacity: 0.2;
      border-top-left-radius: 0;
    }
  }
`;

export const ContainerItem = styled.div`
  width: 100%;
  height: 100%;

  h3 {
    font-size: 26px;
    margin: 12px 0 8px;
    line-height: 1;
    color: #2e3159;
  }

  p {
    margin-top: auto;
    font-size: 15px;
    line-height: 1;
    color: #666;
  }
`;

export const Stripe = styled.div`
  z-index: 2;
  left: 0;
  top: 0;
  position: absolute;
  background-color: ${(props) => props.color};
  width: 6px;
  height: 100%;
`;
