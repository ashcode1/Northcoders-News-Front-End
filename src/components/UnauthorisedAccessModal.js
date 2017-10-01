import React from 'react';
import PropTypes from 'prop-types';

const UnauthorisedAccessModal = (props) => {
  if (!props.modalOverlay) {
    return null;
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <section className="box">
          <div className="column is-8">
            <h1 className="title"><b>Unauthorised Access</b></h1>
            <p>
              You do not have permission to delete other users comments.
              You can however vote on comments by clicking the up or down arrows.
            </p>
          </div>
        </section>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={props.onClose} />
    </div>
  );
};

UnauthorisedAccessModal.defaultProps = {
  modalOverlay: false,
  onClose: () => ({
    value: 'default value',
  }),
};

UnauthorisedAccessModal.propTypes = {
  modalOverlay: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default UnauthorisedAccessModal;
