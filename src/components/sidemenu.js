import React, { Component } from 'react'
import { Link } from "gatsby"
import { Divider, Header, Menu, Sidebar } from 'semantic-ui-react'
import MainLogo from '../images/logo/logo.png'


const contents = {
  "参加募集": [
    <Link to="/call-for-participants">参加募集</Link>,
    <Link to="/design-competition">表紙デザイン募集</Link>,
    <Link to="/challenge">WISS Challenge募集</Link>,
    <Link to="/sponsorship">企業スポンサー募集</Link>,
    <Link to="/call-for-volunteers">学生ボランティア募集</Link>,
  ],
  "著者の方へ": [
    <Link to="/call-for-papers">論文募集</Link>,
    <Link to="/review_policy">査読方針</Link>,
    <Link to="/review_form">査読フォーム</Link>,
  ],
  "プログラム": [
    <Link to="/program">全体スケジュール・登壇発表・ロングティザー発表</Link>,
    <span>デモ・ポスター発表（準備中）</span>,
  ],
  "動画中継": [
    <span>１日目（準備中）</span>,
    <span>２日目（準備中）</span>,
    <span>３日目（準備中）</span>,
  ],
  "予稿集": [
    <span>ウェブ予稿集（準備中）</span>
  ],
  "WISSについて": [
    <a href="https://twitter.com/wiss_official">公式ツイッター</a>,
    <span>名札システム（準備中）</span>,
    <span>ローカル情報（準備中）</span>,
    <span>表彰（準備中）</span>,
    <Link to="/committee">WISS委員一覧</Link>,
    <Link to="/archive">過去のWISS</Link>,
  ],
}

export default class SideMenu extends Component {
  render() {
    const visible = this.props.visible;

    const items = (() => {
      var array = [];

      for (var key in contents) {
        array.push(
          <Divider horizontal key={ key }>
            <Header inverted as='h5'>{ key }</Header>
          </Divider>
        );

        array.push(
          contents[key].map((link, index) => {
            return <Menu.Item key={ key + "_" + String(index) }>{ link }</Menu.Item>;
          })
        );
      }

      return array;
    })();

    return (
      <Sidebar
        as={Menu}
        animation='overlay'
        direction='left'
        inverted
        vertical
        visible={visible}
        style={{ zIndex: '20' }}
      >
        <Menu.Item>
          <Link to="/"><img src={MainLogo} style={{ width: '100%' }} alt='WISS' /></Link>
        </Menu.Item>
        { items }
      </Sidebar>
    );
  }
};
