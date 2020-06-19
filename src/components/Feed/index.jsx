import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PostCard from '../PostCard';
import { Wrapper, CardWrapper } from './style';
import { sortById } from '../../shared/utility';
import useFeed from '../../hooks/useFeed';

const Feed = () => {
  const [posts, getFeed, recordLike, followUser, unfollowUser] = useFeed();
  const location = useLocation();

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  const toggleFollow = (author) => {
    return author.followed_by_current_user
      ? unfollowUser(author.id)
      : followUser(author.id);
  };

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
              followClicked={() => toggleFollow(post.author)}
              image={post.image_url}
              likeClicked={() => recordLike(post.id)}
              likeCount={post.like_count}
              caption={post.caption}
              following={post.author.followed_by_current_user}
              liked={post.liked_by_current_user}
              ownPost={
                post.author.id === parseInt(localStorage.getItem('userId'), 10)
              }
              timeStamp={post.created_at}
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
              followClicked={() => toggleFollow(post.author)}
              image={post.image_url}
              likeClicked={() => recordLike(post.id)}
              likeCount={post.like_count}
              caption={post.caption}
              following={post.author.followed_by_current_user}
              liked={post.liked_by_current_user}
              ownPost={
                post.author.id === parseInt(localStorage.getItem('userId'), 10)
              }
              timeStamp={post.created_at}
            />
          </CardWrapper>
        );
      });
  }

  return <Wrapper>{visiblePosts}</Wrapper>;
};

export default Feed;
