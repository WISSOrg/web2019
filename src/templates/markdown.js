import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Segment, Sidebar, Visibility } from 'semantic-ui-react';
import Masthead from '../components/masthead';
import PageFooter from '../components/pagefooter';
import { PageHeaderBg, PageHeaderButton } from '../components/pageheader';
import Seo from '../components/seo';
import SideMenu from '../components/sidemenu';
import '../styles/markdown.css';
import CommitteeContent from '../components/committeecontent';
import SponsorGrid from '../components/sponsorgrid';

export default class Template extends Component {
  state = {
    isSideMenuVisible: false,

    mastheadVisibility: {
      percentagePassed: 0,
      topPassed: false,
      bottomPassed: false,
      topVisible: false,
      bottomVisible: false,
    },
  };

  handleUpdate = (e, { calculations }) => this.setState({ mastheadVisibility: calculations });

  toggleMenu(event) {
    // This is necessary to stop the "onClick" event to be propagatted to the
    // parent DOM's "onClick" event
    event.stopPropagation();

    this.setState({ isSideMenuVisible: !this.state.isSideMenuVisible });
  }

  hideMenu() {
    this.setState({ isSideMenuVisible: false });
  }

  render() {
    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);

    const { markdownRemark: post } = this.props.data;
    const { frontmatter, html } = post;
    const { title, path } = frontmatter;

    const { isSideMenuVisible, mastheadVisibility } = this.state;

    const isTop = (path === "/");
    const isCommittee = (path === "/committee");
    const showSponsors = (path === "/") || (path === "/sponsorship");

    const showMenu = isTop ? (mastheadVisibility.percentagePassed > 0.8 || mastheadVisibility.bottomPassed) : true;

    return (
      <div>
        <Helmet title={`${title} - WISS 2019`} />
        <Seo />
        <Sidebar.Pushable as={Segment} style={{ borderWidth: '0px', borderRadius: '0px', margin: '0px' }}>
          <SideMenu animation={true} visible={isSideMenuVisible} />
          <Sidebar.Pusher dimmed={isSideMenuVisible} onClick={this.hideMenu} >
            <Visibility onUpdate={this.handleUpdate}>
              { isTop ? <Masthead hideMenu={this.hideMenu} /> : null }
            </Visibility>
            <PageHeaderBg hideMenu={this.hideMenu} visible={showMenu} />
            <PageHeaderButton toggleMenu={this.toggleMenu} hideMenu={this.hideMenu} visible={showMenu} />
            { isTop ? null : <div style={{ height: '74px' }}></div> }
            <Container style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
              { isCommittee
                // If the page is about committee members, display a custom component
                ? <CommitteeContent />

                // Render the content written in Markdown
                : <div dangerouslySetInnerHTML={{__html: html}} />
              }
              { showSponsors
                ? <SponsorGrid />
                : null
              }
            </Container>
            <PageFooter />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
};

export const pageQuery = graphql`
  query PageByPath($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        excerpt
      }
    }
  }
`;
