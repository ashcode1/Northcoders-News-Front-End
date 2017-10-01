import React from 'react';
import PropTypes from 'prop-types';
import UnauthorisedAccessModal from './UnauthorisedAccessModal';
import '../css/Comment.css';

export class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOverlay: false,
    };
    this.setModalOverlay = this.setModalOverlay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  setModalOverlay() {
    return this.setState({ modalOverlay: true });
  }

  handleDelete(props) {
    const { id, createdBy } = props;
    if (createdBy !== 'northcoder') {
      return this.setModalOverlay();
    }

    if (createdBy === 'northcoder') {
      props.deleteComment(id);
      return this.setState({ modalOverlay: false });
    }
  }

  toggleModal() {
    this.setState({
      modalOverlay: false,
    });
  }

  render() {
    return (
      <section className="box">
        <article className="media">
          <figure className="media-left">
            <figure className="image is-square">
              <img src={this.props.avatarUrl} alt="User Avatar" />
            </figure>
            <section className="voteSection">
              <a className="is-danger is-small" onClick={this.props.commentVote.bind(null, this.props.id, 'up')} >
                <i className="fa fa-arrow-circle-up row" />
              </a>
              <span className="row tag is-medium bold">{this.props.comment.votes}</span>
              <a className="is-danger is-small" onClick={this.props.commentVote.bind(null, this.props.id, 'down')} >
                <i className="fa fa-arrow-circle-down row" />
              </a>
            </section>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="comment-body">{this.props.comment.body}</p>
            </div>
          </div>
          <div className="media-right">
            <section className="trashButtonSection">
              <a className="is-warning is-small" onClick={this.handleDelete.bind(null, this.props, this.state)}>
                <i className="fa fa-trash-o is-medium" />
              </a>
            </section>
          </div>
        </article>
        <UnauthorisedAccessModal modalOverlay={this.state.modalOverlay} onClose={this.toggleModal} />
      </section>
    );
  }
}

Comment.defaultProps = {
  comment: {},
  avatarUrl: '',
  commentVote: () => ({
    value: 'default value',
  }),
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  commentVote: PropTypes.func.isRequired,
};

export default Comment;
