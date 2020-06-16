import React, { useEffect } from 'react';
import PostCard from '../PostCard';
import { Wrapper, CardWrapper } from './style';
import useFeed from '../../hooks/useFeed';

const Feed = () => {
  const [posts, getFeed, recordLike] = useFeed();

  useEffect(() => {
    getFeed();
  }, [getFeed, recordLike]);

  const likeClickHandler = (postId) => {
    recordLike(postId);
  };

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
            likeClicked={() => likeClickHandler(post.id)}
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
