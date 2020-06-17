import PropTypes from 'prop-types';

const PostCardProps = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followClicked: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  likeClicked: PropTypes.func.isRequired,
  likeCount: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  ownPost: PropTypes.bool.isRequired,
};

export default PostCardProps;
