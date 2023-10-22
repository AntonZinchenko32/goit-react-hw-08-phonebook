import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  justify-content: space-around;

  width: 100%;
  margin-bottom: 40px;


  border: 1px solid black;
`;

export const Input = styled.input`
  margin: 15px 0px;

  width: 270px;
  height: 28px;

  font-size: large;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;

  height: 30px;
  width: 150px;

  font-size: large;
  font-weight: 700;
`;
