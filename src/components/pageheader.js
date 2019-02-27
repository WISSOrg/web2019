import React, { Component } from 'react';
import { Button, Container, Segment, Transition } from 'semantic-ui-react';
import Gradient from './gradient';

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
                <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>WISS 2019</div>
                <Button icon='bars' onClick={toggleMenu} />
              </div>
            </Container>
          </div>
        </Segment>
      </Transition>
    );
  }
}
