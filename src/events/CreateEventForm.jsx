import React from 'react';
import TextField from 'material-ui/TextField';

export default () => (
  <form>
    <TextField floatingLabelText="Title" hint="Womens March" />
    <TextField floatingLabelText="Description" multiline />
  </form>
);
