import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux';

export class EventView extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

EventView.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  date: React.PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => state.events[ownProps.id];
export default connect(mapStateToProps, actions)(EventView);
