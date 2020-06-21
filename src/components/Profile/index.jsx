import React, { useState, useEffect } from 'react';
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
import Modal from '../UI/Modal';
import ImageUploadForm from '../UI/ImageUploadForm';
import AvatarForm from '../UI/AvatarForm';
import { clearInputFile } from '../../shared/utility';

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
  // const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    getUser(username);
  }, [getUser, username]);

  // console.log(user);
  // console.log(postCount);

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

  // const completePostHandler = () => {
  //   // console.log('FFFFFFFFFFF');
  //   setPostCount((prevState) => {
  //     return prevState + 1;
  //   });
  // };

  const updateAvatar = (formData) => {
    changeAvatar(username, formData);
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
          upload={newPost}
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
          <AvatarImg src={user.avatar_url} alt="xxx" />
          {user.id === parseInt(localStorage.getItem('userId'), 10) && (
            <button type="button" onClick={beginPostinghandler}>
              +
            </button>
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
            <button type="button" onClick={beginUpdateAvatar}>
              Edit Avatar
            </button>
          )}
        </div>
      </TopWrapper>
      <ImagesWrapper>{userPosts}</ImagesWrapper>
    </Container>
  );
};

export default Profile;
