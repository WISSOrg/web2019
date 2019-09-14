import { StaticQuery, graphql } from "gatsby"
import React, { Component } from 'react';
import { Divider, Grid, Header, Icon, Image, Label, List, Segment, Table } from 'semantic-ui-react';

const session_info = {
  "1": { name: "Upskilling", time: "1日目 15:40—16:50", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "2": { name: "Shaping & Imaging", time: "2日目 09:00—10:15", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "3": { name: "Feedback", time: "2日目 15:10—16:15", session_chair: "（TBA）", chat_chair: "（TBA）" },
};

const colormap = {
  "ロング採録": "rgba(89, 113, 142, 0.3)",
  "ショート採録": "rgba(89, 113, 142, 0.3)",
  "議論枠採録": "rgba(89, 113, 142, 0.3)",
  "ロングティザー発表": "rgba(200, 120, 140, 0.3)",
  "予稿ありデモポスター": "rgba(150, 150, 150, 0.3)",
  "予稿なしデモポスター": "rgba(150, 150, 150, 0.3)",
  "招待デモ": "rgba(108, 135, 96, 0.3)",
  "企業展示": "rgba(210, 193, 77, 0.3)",
}

class TypeLabel extends Component {
  render() {
    const type = this.props.type;
    const message = (() => {
      if (type === "ロング採録" || type === "ショート採録" || type === "議論枠採録") { return "登壇発表"; }
      if (type === "ロングティザー発表") { return "Long Teaser発表"; }
      if (type === "予稿ありデモポスター") { return "デモ・ポスター発表（予稿あり）"; }
      if (type === "予稿なしデモポスター") { return "デモ・ポスター発表（予稿なし）"; }
      if (type === "招待デモ") { return "招待デモ・ポスター発表"; }
      if (type === "企業展示") { return "スポンサー企業展示"; }
      return null;
    })();

    return (
      <Label horizontal style={{ backgroundColor: colormap[type], marginLeft: "0.6em" }}>{ message }</Label>
    );
  }
}

class ProgramCell extends Component {
  render() {
    const {
      day,
      booth_id,
      title,
      author_list,
      type
    } = this.props;

    return (
      <p>
        [{ booth_id }] <b>{ title }</b><TypeLabel type={ type } /><br />{ author_list }
      </p>
    );
  }
}

class SessionTitle extends Component {
  render() {
    const target_session = this.props.target_session;

    const title = (target_session === "5" || target_session === "6" ? "" : "セッション" + target_session + ": ") + session_info[target_session]["name"];

    return (
      <Segment textAlign='center' secondary style={{ marginTop: "3em", marginBottom: "2em" }}>
        <Header as="h2" id={ target_session } style={{ paddingTop: "8px" }}>
          { title }
        </Header>
        <List bulleted horizontal>
          <List.Item>{ session_info[target_session]["time"] }</List.Item>
          <List.Item>座長：{ session_info[target_session]["session_chair"] }</List.Item>
          <List.Item>チャット座長：{ session_info[target_session]["chat_chair"] }</List.Item>
        </List>
      </Segment>
    );
  }
}

class SessionCell extends Component {
  render() {
    const program_data = this.props.program_data;
    const target_session = this.props.target_session;

    const items = program_data.allDemoPosterCsv.edges.map((row, i) => (
      target_session === row.node.day
      ? <ProgramCell
          title={ row.node.title }
          author_list={ row.node.author_list }
          booth_id={ row.node.booth_id }
          type={ row.node.type }
          key= { row.node.day + "_" + row.node.booth_id }
          />
      : null
    ));

    return (
      <div>
        <SessionTitle target_session={ target_session } />
        { items }
      </div>
    );
  }
}

class Legend extends Component {
  render() {
    return (
      <List bulleted>
        <List.Item><TypeLabel type="l" />: ロング発表（発表15分・質疑10分）</List.Item>
        <List.Item><TypeLabel type="s" />: ショート発表（発表10分・質疑5分）</List.Item>
        <List.Item><TypeLabel type="d" />: 議論枠発表（発表7.5分・質疑7.5分）</List.Item>
        <List.Item><TypeLabel type="t" />: Long Teaser発表（発表5分・質疑3分）</List.Item>
      </List>
    );
  }
}

class DemoPosterImpl extends Component {
  render() {
    const program_data = this.props.program_data;

    const session_cells = (() => {
      var array = [];

      for (var key in session_info)
      {
        array.push(<SessionCell
          target_session={ key }
          program_data={ program_data }
          key={ "session_cell_" + key }
        />);
      }

      return array;
    })();

    return (
      <div>
        <Header as="h1">デモ・ポスター発表</Header>
        <Legend />
        { session_cells }
      </div>
    );
  }
}

export default class DemoPoster extends React.Component {
  render() {
    return (
      // StaticQuery is a graphql functionality for non-page component
      <StaticQuery
        query={graphql`
        query {
          allDemoPosterCsv {
            edges {
              node {
                day
                booth_id
                type
                title
                author_list
              }
            }
          }
        }
      `}
      // Pass the data for the sub class
      render={data => <DemoPosterImpl program_data={ data } />} />
    );
  }
}
