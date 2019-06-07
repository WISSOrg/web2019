import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class ProgramCommitteeGridCell extends Component {
  render() {
    return (
      <Grid.Column width={4}>
        <Image src='/pc/placeholder.jpg' size='small' rounded centered />
        <p>Test message: this space will be used as by a program-committee grid element.</p>
      </Grid.Column>
    );
  }
}

export default class ProgramCommitteeGrid extends Component {
  render() {
    return (
      <Grid style={{ marginTop: '20px' }}>
        {(() => {
          const items = [];
          for (let i = 0; i < 14; i++) {
            items.push(<ProgramCommitteeGridCell />);
          }
          return <Grid.Row>{ items }</Grid.Row>;
        })()}
      </Grid>
    );
  }
}
