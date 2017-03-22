import { PropTypes } from 'react';

const Filter = ({children, data, predicate}) =>
  children(data.filter(predicate));

Filter.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  predicate: PropTypes.func.isRequired
};

export default Filter;
