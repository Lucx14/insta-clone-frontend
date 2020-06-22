import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 340px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const AvatarImg = styled.img`
  border: 2px #4d4d4d solid;
  padding: 2px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

export const CaptionWrapper = styled.div`
  padding-top: 10px;
  /* display: inline; */
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const BottomWrapper = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const StyledUserLink = styled.div`
  padding-left: 5px;
  a {
    text-decoration: none;
    color: #4d4d4d;
    font-size: 1.4rem;
  }
`;

export const StyledTimestamp = styled.div`
  color: #4d4d4d;
  font-size: 0.8rem;
  margin-top: 30px;
`;

export const StyledCaptionUsername = styled.div``;

export const StyledCaptionText = styled.span`
  color: #4d4d4d;
  font-weight: lighter;
`;
