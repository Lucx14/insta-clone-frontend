import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PostCard from '../PostCard';
import { Wrapper, CardWrapper } from './style';
import { getPosts as apiGetPosts } from '../../api/posts';
import { sortById } from '../../shared/utility';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    apiGetPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  let visiblePosts;
  if (posts && location.pathname === '/search') {
    visiblePosts = sortById(posts)
      .filter(
        (post) =>
          post.author.id !== parseInt(localStorage.getItem('userId'), 10)
      )
      .map((post) => {
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
  if (posts && location.pathname === '/') {
    visiblePosts = sortById(posts)
      .filter((post) => post.author.followed_by_current_user)
      .map((post) => {
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

  return <Wrapper>{visiblePosts}</Wrapper>;
};

export default Feed;
