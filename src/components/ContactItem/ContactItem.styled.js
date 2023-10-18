import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DeleteButton = styled.button`
  margin-left: 15px;
`;
