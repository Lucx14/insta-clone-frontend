import React, { useState, useEffect } from 'react';
import { getFeed as apiGetFeed } from '../../api/posts';
import PostCard from '../PostCard';
import { Wrapper, CardWrapper } from './style';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiGetFeed().then((res) => {
      setPosts(res);
    });
  }, []);

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

export default Feed;
