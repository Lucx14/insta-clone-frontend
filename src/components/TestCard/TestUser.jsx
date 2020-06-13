import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getUser from '../../api/users';

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
`;

const TopWrapper = styled.div`
  padding: 30px;
`;

const Img = styled.img`
  width: 373px;
  padding: 3px;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0px;
  }
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 600px) {
    background-color: pink;
    flex-direction: column;
  }
`;

const ImagesWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

const TestUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser('kira').then((res) => {
      setUser(res);
    });
  }, []);

  // console.log(user);

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
      <TopWrapper>
        <Wrapper>
          <AvatarImg src={user.avatar_url} alt="xxx" />
          <h2>{user.post_count} Posts</h2>
          <h2>{user.follower_count} Followers</h2>
          <h2>{user.followed_count} Following</h2>
        </Wrapper>

        <div>
          <h2>{user.username}</h2>
          <button type="button">
            {user.followed_by_current_user ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </TopWrapper>
      <ImagesWrapper>{userPosts}</ImagesWrapper>
    </Container>
  );
};

export default TestUser;
