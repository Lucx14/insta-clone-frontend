import React from 'react';
import { NavLink } from 'react-router-dom';

import PostCardProps from './propTypes';
import LikeButton from '../UI/Buttons/LikeButton';
import FollowButton from '../UI/Buttons/FollowButton';
import {
  Container,
  Img,
  AvatarImg,
  CaptionWrapper,
  TopWrapper,
  BottomWrapper,
  UserWrapper,
  LikeWrapper,
  StyledUserLink,
  StyledTimestamp,
  StyledCaptionUsername,
  StyledCaptionText,
} from './style';
import { msToElapsedTime } from '../../shared/utility';

const PostCard = (props) => {
  const {
    avatar,
    username,
    followClicked,
    image,
    likeClicked,
    likeCount,
    caption,
    following,
    ownPost,
    timeStamp,
  } = props;

  return (
    <Container>
      <TopWrapper>
        <UserWrapper>
          <AvatarImg src={avatar} alt="av" />
          <StyledUserLink>
            <NavLink to={`/profile/${username}`} exact>
              {username}
            </NavLink>
          </StyledUserLink>
        </UserWrapper>
        {!ownPost && (
          <FollowButton clicked={followClicked}>
            {following ? 'Unfollow' : 'Follow'}
          </FollowButton>
        )}
      </TopWrapper>
      <Img src={image} alt="text desc" />
      <BottomWrapper>
        <LikeWrapper>
          <div>
            {!ownPost && <LikeButton clicked={likeClicked}>Like</LikeButton>}
          </div>
          <div>{likeCount} likes</div>
        </LikeWrapper>
        <CaptionWrapper>
          <StyledCaptionUsername>
            {username}: <StyledCaptionText>{caption}</StyledCaptionText>
          </StyledCaptionUsername>
        </CaptionWrapper>
        <StyledTimestamp>{msToElapsedTime(timeStamp)}</StyledTimestamp>
      </BottomWrapper>
    </Container>
  );
};

PostCard.propTypes = PostCardProps;

export default PostCard;
