import React, { Component } from 'react';
import { Button, Container, Image, Segment, Transition } from 'semantic-ui-react';
import Gradient from './gradient';
import TitleLogo from '../images/logo/logo-with-title.png';

const height = '72px'

export class PageHeaderBg extends Component {
  render() {
    const { visible, hideMenu } = this.props;

    return (
      <Transition visible={visible} animation='fade down' duration={500}>
        <Segment inverted vertical onClick={hideMenu} style={{
          height: height,
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
            <Container style={{ opacity: '0.9', height: '100%', filter: 'drop-shadow(0px 4px 10px rgba(56, 61, 75, 0.5)' }}>
              <Image src={TitleLogo} style={{ height: '100%' }} />
            </Container>
          </div>
        </Segment>
      </Transition>
    );
  }
}

export class PageHeaderButton extends Component {
  render() {
    const { visible, hideMenu, toggleMenu } = this.props;

    return (
      <Segment vertical onClick={hideMenu} style={{
        height: height,
        width: '100%',
        position: 'fixed',
        top:'0px',
        zIndex: '13',
        borderBottomWidth: '0px',
      }}>
        <Container textAlign='right' style={{ transition: 'opacity 0.5s ease', opacity: visible ? 0.9 : 0.5, height: '100%', filter: 'drop-shadow(0px 4px 10px rgba(56, 61, 75, 0.5)' }}>
          <Button icon='bars' onClick={toggleMenu} />
        </Container>
      </Segment>
    );
  }
}
