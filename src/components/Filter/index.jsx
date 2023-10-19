import { useDispatch } from 'react-redux';
import { setFilterQuery } from 'redux/contacts/filterSlice';
import { nanoid } from 'nanoid';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();
  return (
    <>
      <Label htmlFor={filterInputId}>Find contacts by name</Label>
      <Input
        id={filterInputId}
        onChange={evt => dispatch(setFilterQuery(evt.target.value))}
      />
    </>
  );
};

export default Filter;
