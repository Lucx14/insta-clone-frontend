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
  border: 2px black solid;
  border-radius: 50%;
  width: 30px;
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
