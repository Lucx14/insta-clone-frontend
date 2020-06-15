import React from 'react';
import { Wrapper, LinkTag } from './style';

const Footer = () => {
  return (
    <Wrapper>
      <LinkTag href="https://github.com/Lucx14/insta-clone-backend">
        View backend code
      </LinkTag>
      <LinkTag href="https://github.com/Lucx14/insta-clone-frontend">
        View frontend code
      </LinkTag>
    </Wrapper>
  );
};

export default Footer;
