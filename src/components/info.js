import { Link } from "gatsby"
import React, { Component } from 'react';
import { List, Message } from 'semantic-ui-react';

const messages = [
  <List.Item><b>2019/08/08:</b> <Link to="/call-for-participants">参加募集</Link>を開始しました。</List.Item>,
  <List.Item><b>2019/08/08:</b> <a href="https://twitter.com/wiss_official">WISSのTwitterアカウント</a>を作成しました。WISSに関する最新の情報をツイートしていくので、ぜひフォローしてみてください。</List.Item>,
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
