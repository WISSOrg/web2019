import { Link } from "gatsby"
import React, { Component } from 'react';
import { List, Message } from 'semantic-ui-react';

const messages = [
  <List.Item key="5"><b>2019/09/18:</b> <a href="https://www.wiss.org/WISS2019Proceedings/">ウェブ予稿集</a>を掲載しました。</List.Item>,
  <List.Item key="4"><b>2019/09/15:</b> <Link to="/demo-poster">デモ・ポスター発表</Link>を掲載しました。</List.Item>,
  <List.Item key="3"><b>2019/08/19:</b> <Link to="/program">全体スケジュール・登壇発表・ロングティザー発表</Link>を掲載しました。</List.Item>,
  <List.Item key="2"><b>2019/08/09:</b> <Link to="/call-for-participants">参加募集</Link>を開始しました。</List.Item>,
  <List.Item key="1"><b>2019/08/09:</b> <a href="https://twitter.com/wiss_official">WISSのTwitterアカウント</a>を作成しました。WISSに関する最新の情報をツイートしていくので、ぜひフォローしてみてください。</List.Item>,
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
