import React from 'react';
import PropTypes from 'prop-types';

class UnauthorisedAccessModal extends React.Component {
  render() {
    if (!this.props.modalOverlay) {
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
                You can however vote on other users' comments by clicking the up or down arrows.
              </p>
            </div>
          </section>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.onClose} />
      </div>
    );
  }
}

UnauthorisedAccessModal.propTypes = {
  modalOverlay: PropTypes.bool.isRequired,
};
export default UnauthorisedAccessModal;
