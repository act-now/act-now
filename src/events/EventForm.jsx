import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from './redux';

export class EventForm extends Component {
  onChangeTitle = (event, value) => {
    this.props.changeTitle(this.props.id, value);
  };
  onChangeDescription = (event, value) => {
    this.props.changeDescription(this.props.id, value);
  };
  onChangeDate = (_, value) => {
    this.props.changeDate(this.props.id, value.valueOf());
  };

  onChangeTime = (_, value) => {
    this.props.changeDate(this.props.id, value.valueOf());
  };
  onSubmit = (event) => {
    event.preventDefault();
    // Note should change the action if this were to update instead of create
    this.props.create();
  };

  render() {
    const date = this.props.date ? new Date(this.props.date) : null;
    return (
      <form onSubmit={this.onSubmit} className="container">
        {this.props.error ? this.props.error : null}
        <TextField
          required
          fullWidth
          floatingLabelText="Title"
          value={this.props.title}
          onChange={this.onChangeTitle}
        />
        <TextField
          fullWidth
          floatingLabelText="Description"
          value={this.props.description}
          onChange={this.onChangeDescription}
          multiLine
        />
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <DatePicker
              required
              fullWidth
              floatingLabelText="Date"
              onChange={this.onChangeDate}
              value={date}
            />
          </div>
          <div className="col-sm-6 col-xs-12">
            <TimePicker
              required
              fullWidth
              floatingLabelText="Time"
              onChange={this.onChangeTime}
              value={date}
            />
          </div>
        </div>
        <RaisedButton label="Submit" primary fullWidth type="submit" icon={this.props.loading ? 'cached' : null} />
      </form>
    );
  }
}

EventForm.propTypes = {
  title: React.PropTypes.string.isRequired,
  changeTitle: React.PropTypes.func.isRequired,
  description: React.PropTypes.string.isRequired,
  changeDescription: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  date: React.PropTypes.number.isRequired,
  changeDate: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
  create: React.PropTypes.func.isRequired,

};

const mapStateToProps = (state, ownProps) => state.events[ownProps.id];
export default connect(mapStateToProps, actions)(EventForm);
