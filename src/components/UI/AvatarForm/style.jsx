import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px;
`;

export const HeadingWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #4d4d4d;
  padding: 5px 0;
  margin-bottom: 15px;
`;

export const FileInputWrapper = styled.div`
  padding: 30px 0;
`;

export const StyledHelper = styled.div`
  text-align: left;
  color: #808080;
  font-size: 0.625rem;
  font-style: italic;
  padding-top: ${(props) => (props.errors ? '6px' : '0px')};
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
