import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  width: 100%;
`;

export const TopWrapper = styled.div`
  padding: 30px;
`;

export const Img = styled.img`
  width: 373px;
  padding: 3px;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0px;
  }
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 600px) {
    background-color: pink;
    flex-direction: column;
  }
`;

export const ImagesWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;
