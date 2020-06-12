import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPosts as apiGetPosts } from '../../api/posts';
import PostCard from '../PostCard/PostCard';

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardWrapper = styled.div`
  padding: 25px;
`;

// Proto Home/All/Search = Posts#index
const Test = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiGetPosts().then((res) => {
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
          />
        </CardWrapper>
      );
    });
  }

  return <Wrapper>{allPosts}</Wrapper>;
};

export default Test;
