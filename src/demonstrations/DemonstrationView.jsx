import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux';

<<<<<<< HEAD:src/events/EventView.jsx
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
=======
export default () => (
  <h1>Demonstration Details</h1>
);
>>>>>>> 3ce0ca776653ae01a4ff7e498310fb03ca46a5bd:src/demonstrations/DemonstrationView.jsx
