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
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          }}>
            <Container style={{ opacity: '0.8', textAlign: 'left' }}>
              <Button floated='right' icon='bars' onClick={toggleMenu} style={{}} />
              <span style={{
                fontSize: '1.2em',
                fontWeight: 'bold',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)'
              }}>
                WISS 2019
              </span>
            </Container>
          </div>
        </Segment>
      </Transition>
    );
  }
}
