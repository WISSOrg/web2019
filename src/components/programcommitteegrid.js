import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class ProgramCommitteeGridCell extends Component {
  render() {
    return (
      <Grid.Column width={4} style={{ paddingBottom: '40px' }}>
        <Image src='/pc/placeholder.jpg' size='small' rounded centered />
        <h5>Name Name</h5>
        <p>Test message. Test message. Test message. Test message. Test message.</p>
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
