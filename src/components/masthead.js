import React from 'react';
import { Container, Divider, Image, Segment } from 'semantic-ui-react';
import MainLogo from '../images/logo/logo.png';
import Gradient from './gradient';
import Vignette from './vignette';

export default (props) => (
  <Segment inverted textAlign='center' vertical onClick={props.hideMenu} style={{
    overflow: 'hidden',
    height: '560px',
    width: '100%'
  }}>
    <Gradient zIndex={1} />
    <Vignette zIndex={2} />
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
      <Container text style={{ opacity: 0.9, filter: 'drop-shadow(0px 4px 10px rgba(56, 61, 75, 0.5)' }}>
        <Image centered src={MainLogo} style={{ width: '100%', maxWidth: '600px' }} alt="WISS 2019" />
        <Divider style={{ borderBottomWidth: '3px' }} />
        <p style={{ fontSize: '0.9em', margin: '0px' }}>第27回インタラクティブシステムとソフトウェアに関するワークショップ</p>
        <p style={{ fontSize: '0.9em', marginBottom: '32px' }}>The 27th Workshop on Interactive Systems and Software</p>
      </Container>
    </div>
  </Segment>
)
