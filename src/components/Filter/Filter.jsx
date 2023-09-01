import React from 'react';
import { FilterCount, Label, Input } from './Filter.styled';
import { getFilter, setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterCount>
      <Label>
        Find contacts by name
        <Input type="text" name={filter} value={filter} onChange={onChange} />
      </Label>
    </FilterCount>
  );
}

export default Filter;
