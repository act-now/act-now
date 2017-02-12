import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';


export default () => (
  <form>
    <TextField floatingLabelText="Title" hint="Womens March" />
    <TextField floatingLabelText="Description" multiLine />
    <TextField floatingLabelText="Location" />
    <DatePicker floatingLabelText="Date" />
    <TimePicker floatingLabelText="Time" />
    <RaisedButton label="Full width" fullWidth type="submit" />
  </form>
);
