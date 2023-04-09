import React from 'react';
import PropTypes from 'prop-types';
import './styles/Alert.css';

const Alert = ({ message, type, onClose, disableUserInteraction }) => {
  const alertClassName = `alert alert-${type}`;

  const handleBackgroundClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="alert-overlay" style={{ pointerEvents: disableUserInteraction ? 'all' : 'none' }}>
      <div className={alertClassName} role="alert" onClick={handleBackgroundClick}>
        <button type="button" className="close" aria-label="Close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
        {message}
      </div>
    </div>
  );
};

Alert.propTypes = { message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
  onClose: PropTypes.func.isRequired,
  disableUserInteraction: PropTypes.bool
};

Alert.defaultProps = {
  disableUserInteraction: true
};

export default Alert;
