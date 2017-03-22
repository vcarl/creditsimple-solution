import React, { PropTypes } from 'react';

const now = new Date();

const DEARow = ({data, onClick, activeAgent}) => {
  const isOpen = activeAgent === data.dea_number;
  const row = <div
    className="agent-row"
    onClick={() => onClick(data.dea_number)}
  >
    <span className="agent-name">
      {data.name}
    </span>
    <span className={'agent-status' + (data.is_expired? ' expired' : '')}>
      {data.is_expired ? 'EXP': 'OK'}
    </span>
    <div className={'agent-details' + (isOpen? ' open': '')}>
      <div className="detail-item">
        <div className="detail-label">Expiration Date</div>
        {data.expiration_date}
      </div>
      <div className="detail-item">
        <div className="detail-label">DEA Number</div>
        {data.dea_number}
      </div>
      <div className="detail-item">
        <div className="detail-label">Provider ID</div>
        {data.provider_id}
      </div>
      <div className="detail-item">
        <div className="detail-label">NPI</div>
        {data.npi}
      </div>
    </div>
  </div>
  return row;
}

DEARow.propTypes = {
  data: PropTypes.object.isRequired
};

export default DEARow;
