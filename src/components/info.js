import { Link } from "gatsby"
import React, { Component } from 'react';
import { List, Message } from 'semantic-ui-react';

const messages = [
  <List.Item key="1"><b>2019/09/27:</b> WISS 2019は終了しました。来年はTHE HAMANAKO（静岡県浜松市）にて<a href="">WISS 2020</a>を開催予定です。</List.Item>,
];

export default class Info extends Component {
  render() {
    var info =
      <Message info style={{ marginBottom: '40px' }}>
        <Message.Header>Recent Updates:</Message.Header>
        <List>{ messages }</List>
      </Message>;

    return info;
  }
}
