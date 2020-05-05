import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  position: relative;
  max-width: 380px;
  width: 90%;
  height: 120px;
  margin: 8px 6px;
  padding: 12px;
  box-shadow: 4px 4px 6px -2px rgba(0, 0, 0, 0.35);
  color: white;
  text-decoration: none;
  background: linear-gradient(
    90deg,
    rgba(43, 87, 117, 1) 0%,
    rgba(78, 67, 118, 1) 100%
  );
  transition: 280ms;
  overflow: hidden;

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    padding: 12px;
    background: ${(props) => props.color};
  }

  @media (hover: hover) {
    footer {
      transform: translateX(-100%);
      opacity: 1;
      transition: 300ms;
    }
    &:hover footer {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

export const Track = styled.div`
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  position: absolute;
  border-left: 4px solid white;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.color};

  span {
    margin: 0 auto;
    z-index: 40;
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

export const ContainerItem = styled.div`
  width: 80%;
  height: 100%;

  h3 {
    font-size: 26px;
    line-height: 26px;
  }

  p {
    font-size: 16px;
    line-height: 18px;
    max-width: 260px;
  }
`;
