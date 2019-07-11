import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

// Sponsor logos
import Isid from '../images/sponsors/isid.png';

// Sponsor definitions
const sponsor_definitions = [
  {
    name: "株式会社電通国際情報サービス",
    image: Isid,
    link: "https://www.isid.co.jp/",
  },
];

export default class SponsorGrid extends Component {

  render() {
    var sponsor_cells = [];
    sponsor_definitions.forEach(function(def, index, array) {
      sponsor_cells.push(
        <Grid.Column style={{ textAlign: 'center' }}>
          <a href={ def["link"] }>
            <Image src={ def["image"] } centered fluid />
            <p>{ def["name"] }</p>
          </a>
        </Grid.Column>
      );
    });

    return (
      <Grid doubling columns={3}>
        { sponsor_cells }
      </Grid>
    );
  }
}
