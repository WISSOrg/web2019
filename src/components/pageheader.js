import React from 'react';
import { Container, Divider, Header, Segment } from 'semantic-ui-react';
import Wiss00 from '../images/wiss2018-0.png'
import Gradient from './gradient'

export default () => (
  <Segment inverted textAlign='center' vertical style={{
    overflow: 'hidden',
    height: '100vh',
    width: '100%'
  }}>
    <div style={{
      width: '100%',
  		height: '100%',
  		zIndex: 0,
      backgroundImage: `url(${Wiss00})`,
      backgroundSize: 'cover',
  		position: 'absolute',
  		top: '50%',
  		left: '50%',
  		transform: 'translate(-50%, -50%) scale(1.1)',
      webkiFilter: 'blur(4px)',
  		MozFilter: 'blur(4px)',
  		OFilter: 'blur(4px)',
  		msFilter: 'blur(4px)',
  		filter: 'blur(4px)'
    }}>
    </div>
    <Gradient zIndex={1} />
    <div style={{
      width: '100%',
  		height: '100%',
  		zIndex: 2,
  		top: '0%',
  		left: '0%',
  		position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }}>
      <Container text style={{ opacity: 0.9 }}>
        <Divider style={{ borderBottomWidth: '3px' }} />
        <Header style={{ fontSize: '5em' }} as='h1' inverted>WISS 2019</Header>
        <p>第27回インタラクティブシステムとソフトウェアに関するワークショップ</p>
        <p>The 27th Workshop on Interactive Systems and Software</p>
        <Divider style={{ borderBottomWidth: '3px' }} />
      </Container>
    </div>
  </Segment>
)
