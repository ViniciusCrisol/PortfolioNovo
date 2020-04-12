import styled from 'styled-components';

export const ImgsProj = styled.div`
  max-width: 100%;
  margin-top: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    max-width: 440px;
    width: 90%;
    margin: 12px;
    border: 4px solid white;
    box-shadow: 4px 4px 6px -4px rgba(0, 0, 0, 0.36);
  }
`;
export const ImgCel = styled.div`
  > img {
    max-width: 190px;
    max-height: 340px;
    height: 90%;
    margin: 4px;
  }
`;
