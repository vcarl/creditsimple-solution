import React, { PropTypes } from 'react';

const Sort = ({children, data, comparator}) =>
  children(data.sort(comparator));

Sort.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  comparator: PropTypes.func.isRequired
};

export default Sort;
