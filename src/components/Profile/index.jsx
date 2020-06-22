import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  TopWrapper,
  Img,
  AvatarImg,
  Wrapper,
  ImagesWrapper,
  NewPostButton,
  AvatarWrapper,
  StyledEditButton,
  StyledStatsWrapper,
  StyledNum,
  Stat,
  StyledUsername,
  StyledStatLabel,
  StyledDiv,
  FollowWrapper,
} from './style';
import useProfile from '../../hooks/useProfile';
import Modal from '../UI/Modal';
import ImageUploadForm from '../UI/ImageUploadForm';
import AvatarForm from '../UI/AvatarForm';
import { clearInputFile } from '../../shared/utility';
import FollowButton from '../UI/Buttons/FollowButton';

const Profile = () => {
  const [
    user,
    getUser,
    followUser,
    unfollowUser,
    newPost,
    changeAvatar,
  ] = useProfile();
  const [posting, setPosting] = useState(false);
  const [updatingAvatar, setUpdatingAvatar] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    getUser(username);
  }, [getUser, username]);

  const toggleFollow = () => {
    return user.followed_by_current_user
      ? unfollowUser(user.id)
      : followUser(user.id);
  };

  const beginPostinghandler = () => {
    setPosting(true);
  };

  const beginUpdateAvatar = () => {
    setUpdatingAvatar(true);
  };

  const updateAvatar = (formData) => {
    changeAvatar(username, formData);
  };

  const createNewPost = (caption, formData) => {
    newPost(username, caption, formData);
  };

  const cancelActionHandler = () => {
    const es = document.forms[0].elements;
    clearInputFile(es[1]);
    es[0].value = '';
    setPosting(false);
    setUpdatingAvatar(false);
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
      <Modal show={posting} modalClosed={cancelActionHandler}>
        <ImageUploadForm
          upload={createNewPost}
          closeModal={cancelActionHandler}
          complete={() => {}}
        />
      </Modal>
      <Modal
        show={updatingAvatar && !posting}
        modalClosed={cancelActionHandler}
      >
        <AvatarForm
          upload={updateAvatar}
          closeModal={cancelActionHandler}
          complete={() => {}}
        />
      </Modal>
      <TopWrapper>
        <Wrapper>
          <AvatarWrapper>
            <AvatarImg src={user.avatar_url} alt="xxx" />
            {user.id === parseInt(localStorage.getItem('userId'), 10) && (
              <NewPostButton type="button" onClick={beginPostinghandler}>
                +
              </NewPostButton>
            )}
            {user.id === parseInt(localStorage.getItem('userId'), 10) && (
              <StyledEditButton type="button" onClick={beginUpdateAvatar}>
                &#9998;
              </StyledEditButton>
            )}
          </AvatarWrapper>
          <div>
            <StyledDiv>
              <StyledUsername>{user.username}</StyledUsername>
              {user.id !== parseInt(localStorage.getItem('userId'), 10) && (
                <FollowWrapper>
                  <FollowButton clicked={toggleFollow}>
                    {user.followed_by_current_user ? 'Unfollow' : 'Follow'}
                  </FollowButton>
                </FollowWrapper>
              )}
            </StyledDiv>

            <StyledStatsWrapper>
              <Stat>
                <StyledNum>{user.post_count}</StyledNum>
                <StyledStatLabel>Posts</StyledStatLabel>
              </Stat>
              <Stat>
                <StyledNum>
                  {user.follower_count ? user.follower_count - 1 : 0}
                </StyledNum>
                <StyledStatLabel>Followers</StyledStatLabel>
              </Stat>
              <Stat>
                <StyledNum>{user.followed_count}</StyledNum>
                <StyledStatLabel>Following</StyledStatLabel>{' '}
              </Stat>
            </StyledStatsWrapper>
          </div>
        </Wrapper>
      </TopWrapper>
      <ImagesWrapper>{userPosts}</ImagesWrapper>
    </Container>
  );
};

export default Profile;
