import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;

  > a {
    margin: 0 auto;
    max-width: 100px;
    text-decoration: none;
    color: #f4f4f4;
    padding-bottom: 2px;
    border-bottom: solid 2px;

    &:hover {
      transition: 200ms;
      color: #f2bf5e;
    }
  }

  > h1 {
    color: white;
    font-size: 42px;
    line-height: 42px;
  }
`;

export const DescProj = styled.div`
  max-width: 100%;
  margin: 160px auto 0;
`;

export const DescProjText = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 12px;

  p {
    text-align: justify;
    font-size: 18px;
    line-height: 22px;
  }
`;
