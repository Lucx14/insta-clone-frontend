import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #ffffff;
  margin: 20px auto;
  border-radius: 5px;
  width: 80%;
  text-align: center;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const StyledHelper = styled.div`
  text-align: left;
  color: #808080;
  font-size: 0.625rem;
  font-style: italic;
  padding-top: ${(props) => (props.errors ? '6px' : '0px')};
`;

export const FieldWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  font: inherit;
  padding: 6px 10px;
  display: block;
  :focus {
    outline: none;
    background-color: #ccc;
  }
  border: ${(props) => (props.errors ? '1px solid #D6705C' : '1px solid #ccc')};
  background-color: ${(props) => (props.errors ? '#FFF8F7' : 'white')};
`;
