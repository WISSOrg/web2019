import React, { Component } from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';

// This is only a temporal solution; it should be solved by assetPrefix https://www.gatsbyjs.org/docs/asset-prefix/
const path_prefix = '/WISS2019';

// React component for rendering each cell in the PC member grid table
export default class ProgramCommitteeGridCell extends Component {
  render() {
    const { name, affiliation, link, twitter, expertise, image } = this.props;

    const link_dom = (link === '') ? null : <a href={ link }><Icon circular inverted color='grey' name='external'></Icon></a>
    const twitter_url = 'https://twitter.com/' + twitter
    const twitter_dom = (twitter === '') ? null : <a href={ twitter_url }><Icon circular inverted color='grey' name='twitter'></Icon></a>;
    const image_path = path_prefix + '/pc/' + image + ".jpg";

    return (
      <Grid.Column mobile={8} tablet={4} computer={4} style={{ paddingBottom: '40px', textAlign: 'center' }}>
        <Image src={ image_path } size='small' rounded centered />
        <p style={{ marginTop: '1em', marginBottom: '1em' }}><b>{ name }</b></p>
        <p style={{ marginTop: '0em', marginBottom: '0.4em' }}><b>所属：</b>{ affiliation }</p>
        <p style={{ marginTop: '0em', marginBottom: '0.4em' }}><b>専門：</b>{ expertise }</p>

        {/* If the member has either twitter or personal web links (or both), display icons */}
        {
          (link_dom != null || twitter_dom != null)
          ? <p style={{ marginTop: '0em', marginBottom: '0.4em' }}>{ link_dom }{ twitter_dom }</p>
          : null
        }
      </Grid.Column>
    );
  }
}
