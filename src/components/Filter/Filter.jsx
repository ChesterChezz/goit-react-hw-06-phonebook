import React from 'react';
import PropTypes from 'prop-types';
import { FilterCont, Label, Input } from './Filter.styled';

function Filter({ filter, onChangeFilter }) {
  return (
    <FilterCont>
      <Label>Find contacts by name</Label>
      <Input type="text" value={filter} onChange={onChangeFilter} />
    </FilterCont>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
