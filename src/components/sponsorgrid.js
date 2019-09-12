import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

// Sponsor logos
import CaAiLab from '../images/sponsors/caailab.png';
import Isid from '../images/sponsors/isid.png';
import Dentsu from '../images/sponsors/dentsu.png';
import Bnr from '../images/sponsors/bnr.jpg';
import TeamLab from '../images/sponsors/teamlab.png';
import Tis from '../images/sponsors/tis.jpg';
import Future from '../images/sponsors/future.png';

// Sponsor definitions
const sponsor_definitions = [
  {
    name: "株式会社サイバーエージェント AILab",
    image: CaAiLab,
    link: "https://adtech.cyberagent.io/ailab/",
  },
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
  {
    name: "株式会社バンダイナムコ研究所",
    image: Bnr,
    link: "https://www.bandainamco-mirai.com/",
  },
  {
    name: "チームラボ株式会社",
    image: TeamLab,
    link: "https://www.team-lab.com/",
  },
  {
    name: "TIS株式会社",
    image: Tis,
    link: "https://www.tis.co.jp/",
  },
  {
    name: "フューチャー株式会社",
    image: Future,
    link: "https://www.future.co.jp/",
  },
];

export default class SponsorGrid extends Component {

  render() {
    var max_height = '100px'
    var sponsor_cells = [];
    sponsor_definitions.forEach(function(def, index, array) {
      sponsor_cells.push(
        <Grid.Column key={ index } style={{ textAlign: 'center' }}>
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
