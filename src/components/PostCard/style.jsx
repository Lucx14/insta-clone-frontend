import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  max-width: 400px;
  border-radius: 2px;
  margin-bottom: 10px;

  @media screen and (min-width: 400px) {
    -moz-box-shadow: 1px 1px 5px 1px #ccc;
    -webkit-box-shadow: 1px 1px 5px 1px #ccc;
    box-shadow: 1px 1px 5px 1px #ccc;
  }
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
