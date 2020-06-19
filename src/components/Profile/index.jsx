import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  TopWrapper,
  Img,
  AvatarImg,
  Wrapper,
  ImagesWrapper,
} from './style';
import useProfile from '../../hooks/useProfile';
import Backdrop from '../UI/Backdrop';

const Profile = () => {
  const [user, getUser, followUser, unfollowUser] = useProfile();
  const { username } = useParams();

  useEffect(() => {
    getUser(username);
  }, [getUser, username]);

  const toggleFollow = () => {
    return user.followed_by_current_user
      ? unfollowUser(user.id)
      : followUser(user.id);
  };

  let userPosts;
  if (user && user.posts) {
    userPosts = user.posts.map((post) => {
      return (
        <div key={post.id}>
          <Img src={post.image_url} alt="uuu" />
        </div>
      );
    });
  }

  return (
    <Container>
      <Backdrop show={false} clicked={() => {}} />
      <TopWrapper>
        <Wrapper>
          <AvatarImg src={user.avatar_url} alt="xxx" />
          {user.id === parseInt(localStorage.getItem('userId'), 10) && (
            <button type="button">+</button>
          )}
          <h2>{user.post_count} Posts</h2>
          <h2>{user.follower_count} Followers</h2>
          <h2>{user.followed_count} Following</h2>
        </Wrapper>

        <div>
          <h2>{user.username}</h2>
          {user.id !== parseInt(localStorage.getItem('userId'), 10) && (
            <button type="button" onClick={toggleFollow}>
              {user.followed_by_current_user ? 'Unfollow' : 'Follow'}
            </button>
          )}
          {user.id === parseInt(localStorage.getItem('userId'), 10) && (
            <button type="button">Edit Avatar</button>
          )}
        </div>
      </TopWrapper>
      <ImagesWrapper>{userPosts}</ImagesWrapper>
    </Container>
  );
};

export default Profile;
