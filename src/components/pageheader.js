import React, { Component } from 'react';
import { Button, Container, Image, Segment, Transition } from 'semantic-ui-react';
import { Link } from "gatsby"
import Gradient from './gradient';
import TitleLogo from '../images/logo/logo-with-title.png';

export default class PageHeader extends Component {
  render() {
    const { visible, hideMenu, toggleMenu } = this.props;

    return (
      <Transition visible={visible} animation='fade down' duration={500}>
        <Segment inverted vertical onClick={hideMenu} style={{
          overflow: 'hidden',
          height: '72px',
          width: '100%',
          position: 'fixed',
          top:'0px',
          zIndex: '12',
        }}>
          <Gradient zIndex={1} />
          <div style={{
            width: '100%',
            height: '100%',
            zIndex: 3,
            top: '0%',
            left: '0%',
            position: 'absolute',
          }}>
            <Container style={{ opacity: '0.8', height: '100%' }}>
              <div style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                height: '100%'
              }}>
                <Link to="/" style={{ height: '100%' }} ><Image src={TitleLogo} style={{ height: '100%' }} /></Link>
                <Button icon='bars' onClick={toggleMenu} />
              </div>
            </Container>
          </div>
        </Segment>
      </Transition>
    );
  }
}
