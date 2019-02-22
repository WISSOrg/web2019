import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Gradient from './gradient'

export default () => (
  <Segment inverted vertical style={{ padding: '120px 0px' }} textAlign='center'>
    <Gradient zIndex={0} />
    <div style={{
      width: '100%',
      height: '100%',
      zIndex: 1,
      top: '0%',
      left: '0%',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }}>
      <Container style={{ opacity: 0.8 }}>
        <p>&copy; WISS 2019実行委員会</p>
      </Container>
    </div>
  </Segment>
)
