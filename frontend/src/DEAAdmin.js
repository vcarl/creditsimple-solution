import React from 'react';
import utils from './csUtils';

import Link from './Link';
import DEARow from './DEARow';
import LimitRecords from './LimitRecords';

const now = new Date();

class DEAAdmin extends React.Component {
  constructor() {
    super();

    this.state = {
      screen: 'recent-records',
      activeRecord: '',
      records: {
        requestState: 'idle',
        data: [],
        error: ''
      }
    }

    this.focusRow = this.focusRow.bind(this);
  }
  componentDidMount() {
    // Create success/error handlers.
    const handleData = data => {
      data = data.map(x => {
        x.is_expired = new Date(x.expiration_date) <= now
        return x;
      });
      this.setState({records: {requestState: 'idle', data, error: ''}});
    }

    const handleError = data => {
      this.setState({records: {requestState: 'error', data: [], error: data}});
    }

    // Request data
    utils.getData()
      .then(handleData, handleError);

    this.setState({records: {requestState: 'pending', data: [], error: '' }});
  }
  focusRow(deaNumber) {
    // If we're trying to focus the already focused row, clear the focus.
    let newFocus = deaNumber === this.state.activeRecord? '' : deaNumber;
    this.setState({activeRecord: newFocus});
  }
  navigate = (screen) =>
    () =>
      this.setState({screen})

  render() {
    const { records, activeRecord, screen } = this.state;

    return [
      <div className="navigation">
        <Link
          href="expired-records"
          navigate={this.navigate}
          currentScreen={screen}
        >
          View Expired
        </Link>
        <Link
          href="recent-records"
          navigate={this.navigate}
          currentScreen={screen}
        >
          View Top Records
        </Link>
      </div>,
      <div className="agent-list">
        {(() => {
          // Handle all request states.
          switch (records.requestState) {
          case 'pending':
            return <div className="agent-row">Loading records...</div>;
          case 'error':
            return <div className="agent-row">{records.error.message}</div>
          case 'idle':
            return <LimitRecords
              data={records.data}
              screen={screen}
            >
              {data => data
                .slice(0,30)
                .map(record =>
                  <DEARow
                    data={record}
                    onClick={this.focusRow}
                    activeAgent={activeRecord}
                  />
              )}
            </LimitRecords>
          }
        })()}
      </div>
    ];
  }
}

export default DEAAdmin;
