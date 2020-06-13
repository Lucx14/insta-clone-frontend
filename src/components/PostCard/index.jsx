import React from 'react';
import PropTypes from 'prop-types';
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

PostCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followClicked: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  likeClicked: PropTypes.func.isRequired,
  likeCount: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default PostCard;
