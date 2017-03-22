import React, { PropTypes } from 'react';
import Sort from './Sort';
import Filter from './Filter';

const compareOn = (name, direction) =>
  (a, b) => {
    if (direction === 'desc') {
      let tmp = a;
      a = b;
      b = tmp;
    }
    if (a[name] > b[name]) return 1;
    if (a[name] < b[name]) return -1;
    return 0;
  }

// This seemed like a good idea at the time, but I'm not a huge fan of the
// abstraction in hindsight. It saves having really similar code in two places
// in DEAAdmin.js (that would be 4x indented) but it needs to be aware of what
// screen is being shown. Really, this should probably be split into two
// components for handling the data with the logic for which to render done in
// DEAAdmin.js.
class LimitRecords extends React.Component {
  render() {
    const {children, data, screen} = this.props;
    let comparator;
    let predicate;

    switch (screen) {
      case 'expired-records':
        comparator = compareOn('expiration_date', 'asc');
        predicate = x => x.is_expired;
        break;
      case 'recent-records':
      default:
        comparator = compareOn('expiration_date', 'asc');
        predicate = x => x;
    }
    return (
      <Filter data={data} predicate={predicate}>
        {data =>
          <Sort data={data} comparator={comparator}>
            {data => children(data)}
          </Sort>
        }
      </Filter>
    );
  }
}

LimitRecords.propTypes = {
  children: PropTypes.func.isRequired,
  screen: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default LimitRecords;
