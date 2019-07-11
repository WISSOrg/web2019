import { StaticQuery, graphql } from "gatsby"
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProgramCommitteeGridCell from './programcommitteegridcell';

// React component for rendering the PC member grid table (actual implementation)
class ProgramCommitteeGridSub extends Component {
  render() {
    const members_data = this.props.members_data;

    return (
      // Generate a grid
      <Grid style={{ marginTop: '30px' }}>
        {(() => {
          // Generate cells
          const items = members_data.allCommitteeCsv.edges.map((row, i) => (
            <ProgramCommitteeGridCell
              name={ row.node.name }
              affiliation={ row.node.affiliation }
              link={ row.node.link }
              twitter={ row.node.twitter }
              expertise={ row.node.expertise }
              image={ row.node.image }
              />
          ));
          return <Grid.Row>{ items }</Grid.Row>;
        })()}
      </Grid>
    );
  }
}

// React component for rendering the PC member grid table (csv data handling part)
export default class ProgramCommitteeGrid extends Component {
  render() {
    return (
      // StaticQuery is a graphql functionality for non-page component
      <StaticQuery 
        query={graphql`
        query {
          allCommitteeCsv {
            edges {
              node {
                name
                affiliation
                expertise
                link
                twitter
                image
                sort
              }
            }
          }
        }
      `}
      // Pass the data for the sub class
      render={data => <ProgramCommitteeGridSub members_data={ data } />} />
    );
  }
}
