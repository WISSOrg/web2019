import React, { Component } from 'react'
import { Link } from "gatsby"
import { Divider, Header, Menu, Sidebar } from 'semantic-ui-react'
import WissIcon from '../images/cropped-wiss_black.png'

export default class SideMenu extends Component {
  render() {
    const visible = this.props.visible;

    return (
      <Sidebar
        as={Menu}
        animation='uncover'
        direction='left'
        inverted
        vertical
        visible={visible}
      >
        <Menu.Item>
          <Link to="/"><img src={WissIcon} style={{ width: '100%' }} alt='WISS' /></Link>
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
          <Link to="/sponsorship">企業スポンサー募集</Link>
        </Menu.Item>
        <Menu.Item>
          （TBA)
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>著者の方へ</Header>
        </Divider>
        <Menu.Item>
          <Link to="/call-for-papers">論文募集</Link>
        </Menu.Item>
        <Menu.Item>
          （TBA)
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>プログラム</Header>
        </Divider>
        <Menu.Item>
          （TBA)
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>動画中継</Header>
        </Divider>
        <Menu.Item>
          （TBA)
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>予稿集</Header>
        </Divider>
        <Menu.Item>
          （TBA)
        </Menu.Item>
        <Divider horizontal>
          <Header inverted as='h5'>WISSについて</Header>
        </Divider>
        <Menu.Item>
          （TBA)
        </Menu.Item>
      </Sidebar>
    );
  }
};
