import React from 'react';
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
} from './style';

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
    liked,
  } = props;

  return (
    <Container>
      <TopWrapper>
        <UserWrapper>
          <AvatarImg src={avatar} alt="av" />
          <div>{username}</div>
        </UserWrapper>
        <FollowButton clicked={followClicked}>
          {following ? 'Unfollow' : 'Follow'}
        </FollowButton>
      </TopWrapper>
      <Img src={image} alt="text desc" />
      <BottomWrapper>
        <LikeWrapper>
          <div>
            <LikeButton clicked={likeClicked}>
              {liked ? 'Unlike' : 'Like'}
            </LikeButton>
          </div>
          <div>{likeCount} likes</div>
        </LikeWrapper>
        <CaptionWrapper>
          {username}: {caption}
        </CaptionWrapper>
        <p>1 hour ago</p>
      </BottomWrapper>
    </Container>
  );
};

PostCard.propTypes = PostCardProps;

export default PostCard;
