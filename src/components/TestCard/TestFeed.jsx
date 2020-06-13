import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFeed as apiGetFeed } from '../../api/posts';
import PostCard from '../PostCard';

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardWrapper = styled.div`
  padding: 25px;
`;

// Proto feed = Posts#feed
const TestFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiGetFeed().then((res) => {
      setPosts(res);
    });
  }, []);

  // console.log(posts);

  let allPosts;
  if (posts) {
    allPosts = posts.map((post) => {
      return (
        <CardWrapper key={post.id}>
          <PostCard
            avatar={post.author.avatar}
            username={post.author.username}
            followClicked={() => {}}
            image={post.image_url}
            likeClicked={() => {}}
            likeCount={post.like_count}
            caption={post.caption}
            following={post.author.followed_by_current_user}
            liked={post.liked_by_current_user}
          />
        </CardWrapper>
      );
    });
  }

  return <Wrapper>{allPosts}</Wrapper>;
};

export default TestFeed;
