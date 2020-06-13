import styled from 'styled-components';

export const Wrapper = styled.div`
  color: white;
  margin: 0;
  display: flex;
  height: 100%;
  align-items: center;
  width: auto;
  a {
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 28px 25px;
    border-bottom: 4px solid transparent;
    :hover,
    :active {
      background-color: #808080;
      border-bottom: 4px solid #339af0;
      color: white;
    }
  }
`;

export const Placeholder = styled.div``;
