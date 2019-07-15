import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

// Sponsor logos
import Isid from '../images/sponsors/isid.png';
import Dentsu from '../images/sponsors/dentsu.png';

// Sponsor definitions
const sponsor_definitions = [
  {
    name: "株式会社電通",
    image: Dentsu,
    link: "http://www.dentsu.co.jp/",
  },
  {
    name: "株式会社電通国際情報サービス",
    image: Isid,
    link: "https://www.isid.co.jp/",
  },
];

export default class SponsorGrid extends Component {

  render() {
    var max_height = '100px'
    var sponsor_cells = [];
    sponsor_definitions.forEach(function(def, index, array) {
      sponsor_cells.push(
        <Grid.Column style={{ textAlign: 'center' }}>
          <a href={ def["link"] }>
            <div style={{ width: '100%', height: max_height, verticalAlign: 'middle', display: 'table-cell' }}>
              <Image src={ def["image"] } centered style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <p>{ def["name"] }</p>
          </a>
        </Grid.Column>
      );
    });

    return (
      <Grid doubling columns={3} style={{ marginTop: '10px' }}>
        { sponsor_cells }
      </Grid>
    );
  }
}
