import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProgramCommitteeGridCell from './programcommitteegridcell';

// React component for rendering the PC member grid table
export default class ProgramCommitteeGrid extends Component {
  render() {
    return (
      <Grid style={{ marginTop: '30px' }}>
        {(() => {
          const items = [];
          for (let i = 0; i < 14; i++) {
            items.push(<ProgramCommitteeGridCell
              name='伊藤 貴之'
              affiliation='お茶の水女子大学'
              link='http://itolab.is.ocha.ac.jp/~itot/'
              twitter='@1t0ocha'
              expertise='情報可視化・グラフィックス・音楽情報処理・ビジュアルユーザインタフェース'
              />);
          }
          return <Grid.Row>{ items }</Grid.Row>;
        })()}
      </Grid>
    );
  }
}
