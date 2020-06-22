import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  width: 100%;
`;

export const TopWrapper = styled.div`
  padding: 30px;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 30px 0;
  }
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
  border: 1px solid #4d4d4d;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImagesWrapper = styled.div`
  margin-top: 3px;
  display: flex;
  flex-wrap: wrap;
`;

export const NewPostButton = styled.button`
  border: none;
  border-radius: 50%;
  color: white;
  background: #1fa1f1;
  width: 40px;
  height: 40px;
  outline: none;
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  right: -5px;
  bottom: 30px;
  border: 1px solid white;

  :hover {
    background: #1b91da;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const StyledEditButton = styled.button`
  border: none;
  border-radius: 50%;
  color: white;
  background: #1fa1f1;
  width: 40px;
  height: 40px;
  outline: none;
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  left: -5px;
  bottom: 30px;
  border: 1px solid white;

  :hover {
    background: #1b91da;
  }
`;

export const StyledStatsWrapper = styled.div`
  font-size: 1.7rem;
  margin-left: 80px;
  margin-top: 8px;
  color: #4d4d4d;
  display: flex;

  @media screen and (max-width: 600px) {
    margin: 0;
    font-size: 0.8rem;
    align-items: center;
    justify-content: space-around;
  }
`;

export const StyledStats = styled.div``;

export const Stat = styled.div`
  padding: 0 30px;
  text-align: center;

  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const StyledUsername = styled.div`
  font-size: 1.7rem;
  color: #4d4d4d;
  font-weight: bold;
  padding-left: 30px;
  margin-left: 80px;
  padding-bottom: 30px;
  padding-right: 100px;
`;

export const StyledNum = styled.div`
  font-weight: bold;
`;

export const StyledStatLabel = styled.div`
  font-weight: 300;
`;

export const StyledDiv = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const FollowWrapper = styled.div`
  @media screen and (max-width: 600px) {
    padding-bottom: 30px;
  }
`;
