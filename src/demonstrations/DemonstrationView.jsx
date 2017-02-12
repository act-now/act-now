import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux';

export class DemonstrationView extends Component {

  componentDidMount() {
    if (!this.props.demonstration) {
      this.props.fetch(this.props.params.id);
    }
  }

  render() {
    if (this.props.loading) return <h1>Loading!</h1>;
    return (
      <div className="container">
        <h1>{this.props.demonstration.title}</h1>
        <p className="demonstration-view-date">{Date(this.props.demonstration.date)}</p>
        <p className="demonstration-view-description">{this.props.demonstration.description}</p>
      </div>
    );
  }
}

DemonstrationView.propTypes = {
  demonstration: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    date: React.PropTypes.number.isRequired,
  }).isRequired,
  fetch: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id;
  return {
    demonstration: state.demonstrations[id],
    loading: state.demonstrations.loading,
    error: state.demonstrations.error,
  };
};
export default connect(mapStateToProps, actions)(DemonstrationView);
