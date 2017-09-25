import React from 'react';
import PropTypes from 'prop-types';

const VoteButtons = props => (
  <span className="column is-narrow rows">
    <a
      className="is-danger is-small"
      onClick={props.handleVote.bind(null, props.id, 'up')}
      role="presentation"
    >
      <i className="fa fa-arrow-up row" />
    </a>
    <span className="row tag is-medium bold">{props.votes}</span>
    <a
      className="is-danger is-small"
      onClick={props.handleVote.bind(null, props.id, 'down')}
      role="presentation"
    >
      <i className="fa fa-arrow-down row" />
    </a>
  </span>
);

VoteButtons.propTypes = {
  id: PropTypes.objectOf(PropTypes.object).isRequired,
  votes: PropTypes.number.isRequired,
  handleVote: PropTypes.func.isRequired,
};

export default VoteButtons;
