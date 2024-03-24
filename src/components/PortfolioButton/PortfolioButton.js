import React from 'react';
import './PortfolioButton.css';

const PortfolioButton = (props) => {
  return (
    <div className="text-center btn-port d-grid gap-2">
      <button
        href={props.url}
        type="button"
        variant="primary"
        block
        className="btn-new"
        onClick={props.handleClick}
      >
        {' '}
        visit project{' '}
      </button>
    </div>
  );
};

export default PortfolioButton;
