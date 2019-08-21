import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Gradient from './gradient'

export default () => (
  <Segment inverted vertical style={{ padding: '160px 0px' }} textAlign='center'>
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
      <Container style={{ opacity: 0.9, filter: 'drop-shadow(0px 4px 10px rgba(56, 61, 75, 0.5)' }}>
        <p>&copy; WISS 2019実行委員会</p>
        <p style={{ fontSize: '0.7em', opacity: 0.7 }}>Edit this page on <a href="https://github.com/WISSOrg/web2019" style={{ color: '#fff', fontWeight: 'bold' }}>GitHub</a> (PRs welcomed).</p>
      </Container>
    </div>
  </Segment>
)
