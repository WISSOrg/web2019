import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class ProgramCommitteeGrid extends Component {
  render() {
    return (
      <Grid style={{ marginTop: '20px' }}>
        <Grid.Column width={4}>
          <p>Test message: this space will be used as by a program-committee grid element.</p>
        </Grid.Column>
        <Grid.Column width={4}>
          <p>Test message: this space will be used as by a program-committee grid element.</p>
        </Grid.Column>
        <Grid.Column width={4}>
          <p>Test message: this space will be used as by a program-committee grid element.</p>
        </Grid.Column>
        <Grid.Column width={4}>
          <p>Test message: this space will be used as by a program-committee grid element.</p>
        </Grid.Column>
        <Grid.Column width={4}>
          <p>Test message: this space will be used as by a program-committee grid element.</p>
        </Grid.Column>
      </Grid>
    );
  }
}
