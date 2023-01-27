import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { filterValue } from 'redux/filter/filtersSlice';
import { Form, CustomerInput, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Form>
      <Label htmlFor="filter">Find contacts by name </Label>
      <CustomerInput
        hiddenLabel
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterValue(e.currentTarget.value))}
        variant="filled"
        size="small"
      />
    </Form>
  );
};
