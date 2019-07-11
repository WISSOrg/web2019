import { StaticQuery, graphql } from "gatsby"
import React, { Component } from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';

// This is only a temporal solution; it should be solved by assetPrefix https://www.gatsbyjs.org/docs/asset-prefix/
const path_prefix = '/WISS2019';

class ChairsTableCell extends Component {
  render() {
    const { name, affiliation, link, twitter, expertise, image, role, message } = this.props;

    const link_dom = (link === '') ? null : <a href={ link }><Icon circular inverted color='grey' name='external'></Icon></a>
    const twitter_url = 'https://twitter.com/' + twitter
    const twitter_dom = (twitter === '') ? null : <a href={ twitter_url }><Icon circular inverted color='grey' name='twitter'></Icon></a>;
    const image_path = path_prefix + '/pc/' + image + ".jpg";

    return (
      <Grid.Row centered>
        <Grid.Column mobile={8} tablet={4} computer={4}>
          <Image src={ image_path } rounded centered />
        </Grid.Column>
        <Grid.Column mobile={12} tablet={12} computer={12} style={{ paddingTop: '1em', paddingBottom: '1em' }}>
          <p style={{ marginTop: '0em', marginBottom: '0.4em' }}><b>{ role }</b></p>
          <p style={{ marginTop: '0em', marginBottom: '0.4em' }}><b>{ name }</b></p>
          <p style={{ marginTop: '0em', marginBottom: '0.4em' }}><b>所属：</b>{ affiliation }</p>
          <p style={{ marginTop: '0em', marginBottom: '0.4em' }}><b>専門：</b>{ expertise }</p>

          {/* If the member has either twitter or personal web links (or both), display icons */}
          {
            (link_dom != null || twitter_dom != null)
            ? <p style={{ marginTop: '0em', marginBottom: '0.4em' }}>{ link_dom }{ twitter_dom }</p> 
            : null 
          }
        </Grid.Column>
      </Grid.Row>
    );
  }
}

// React component for rendering the PC member grid table (actual implementation)
class ChairsTableSub extends Component {
  render() {
    const members_data = this.props.members_data;

    const items = members_data.allChairsCsv.edges.map((row, i) => (
      <ChairsTableCell
        name={ row.node.name }
        affiliation={ row.node.affiliation }
        link={ row.node.link }
        twitter={ row.node.twitter }
        expertise={ row.node.expertise }
        image={ row.node.image }
        role={ row.node.role }
        message={ row.node.message }
        />
    ));
    return <Grid style={{ marginTop: '30px' }} verticalAlign='middle'>{ items }</Grid>;
  }
}

// React component for rendering the PC member grid table (csv data handling part)
export default class ChairsTable extends Component {
  render() {
    return (
      // StaticQuery is a graphql functionality for non-page component
      <StaticQuery 
        query={graphql`
        query {
          allChairsCsv {
            edges {
              node {
                name
                affiliation
                expertise
                link
                twitter
                image
                sort
                role
                message
              }
            }
          }
        }
      `}
      // Pass the data for the sub class
      render={data => <ChairsTableSub members_data={ data } />} />
    );
  }
}
