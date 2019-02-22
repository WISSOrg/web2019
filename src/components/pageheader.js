import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

export default () => (
  <Segment inverted textAlign='center' vertical>
    <Container text style={{ padding: '300px 0px' }}>
      <Header as='h1' inverted>WISS 2019</Header>
      <p>第27回インタラクティブシステムとソフトウェアに関するワークショップ</p>
    </Container>
  </Segment>
)
