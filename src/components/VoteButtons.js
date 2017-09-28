import React from 'react';
import PropTypes from 'prop-types';
import '../css/VoteButtons.css';

const VoteButtons = props => (

  <div className="column is-centred">
    <a
      className="button is-success is-small is-inverted"
      onClick={props.handleVote.bind(null, props.id, 'up')}
    >
      <i className="fa fa-arrow-up row" />
    </a>
    <span className="row tag is-medium bold">{props.votes}</span>
    <a
      className="button is-danger is-small is-inverted"
      onClick={props.handleVote.bind(null, props.id, 'down')}
    >
      <i className="fa fa-arrow-down row" />
    </a>
  </div>
  
  // <span className="column is-narrow rows">
  //   <a
  //     className="is-danger is-small"
  //     onClick={props.handleVote.bind(null, props.id, 'up')}
  //   >
  //     <i className="fa fa-arrow-up row" />
  //   </a>
  //   <span className="row tag is-medium bold">{props.votes}</span>
  //   <a
  //     className="is-danger is-small"
  //     onClick={props.handleVote.bind(null, props.id, 'down')}
  //   >
  //     <i className="fa fa-arrow-down row" />
  //   </a>
  // </span>
);

VoteButtons.propTypes = {
  id: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  handleVote: PropTypes.func.isRequired,
};

export default VoteButtons;
