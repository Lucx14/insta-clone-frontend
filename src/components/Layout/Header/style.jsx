import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0px;
  width: 100%;
  color: white;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 80%;
    justify-content: center;
    font-size: 0.6rem;
  }
`;

export const TitleWrapper = styled.div`
  font-size: 1.4rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
