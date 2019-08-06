import React, { Component } from 'react'
import { Link } from "gatsby"
import { Divider, Header, Menu, Sidebar } from 'semantic-ui-react'
import MainLogo from '../images/logo/logo.png'

export default class SideMenu extends Component {
  render() {
    const visible = this.props.visible;

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
        <Divider horizontal>
          <Header inverted as='h5'>参加募集</Header>
        </Divider>
        <Menu.Item>
          <Link to="/call-for-participants">参加募集</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/design-competition">表紙デザイン募集</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/challenge">WISS Challenge募集</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/sponsorship">企業スポンサー募集</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/call-for-volunteers">学生ボランティア募集</Link>
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>著者の方へ</Header>
        </Divider>
        <Menu.Item>
          <Link to="/call-for-papers">論文募集</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/review_policy">査読方針</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/review_form">査読フォーム</Link>
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>プログラム</Header>
        </Divider>
        <Menu.Item>
          全体スケジュール・登壇発表・ロングティザー発表（準備中）
        </Menu.Item>
        <Menu.Item>
          デモ・ポスター発表（準備中）
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>動画中継</Header>
        </Divider>
        <Menu.Item>
          １日目（準備中）
        </Menu.Item>
        <Menu.Item>
          ２日目（準備中）
        </Menu.Item>
        <Menu.Item>
          ３日目（準備中）
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>予稿集</Header>
        </Divider>
        <Menu.Item>
          ウェブ予稿集（準備中）
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>WISSについて</Header>
        </Divider>
        <Menu.Item>
          名札システム（準備中）
        </Menu.Item>
        <Menu.Item>
          ローカル情報（準備中）
        </Menu.Item>
        <Menu.Item>
          表彰（準備中）
        </Menu.Item>
        <Menu.Item>
          <Link to="/committee">WISS委員一覧</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/archive">過去のWISS</Link>
        </Menu.Item>
      </Sidebar>
    );
  }
};
