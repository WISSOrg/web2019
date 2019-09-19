import { StaticQuery, graphql } from "gatsby"
import React, { Component } from 'react';
import { Divider, Grid, Header, Icon, Image, Label, List, Segment, Table } from 'semantic-ui-react';

// This is only a temporal solution; it should be solved by assetPrefix https://www.gatsbyjs.org/docs/asset-prefix/
const path_prefix = "/WISS2019"

const session_info = {
  "1": { name: "Upskilling", time: "1日目 15:40—16:50", session_chair: "樋口 啓太", chat_chair: "福地 健太郎" },
  "2": { name: "Shaping & Imaging", time: "2日目 09:00—10:15", session_chair: "横窪 安奈", chat_chair: "瀬川 典久" },
  "3": { name: "Feedback", time: "2日目 15:10—16:15", session_chair: "加藤 邦拓", chat_chair: "真鍋 宏幸" },
  "4": { name: "Touch & Drink", time: "2日目 16:30—17:50", session_chair: "加藤 淳", chat_chair: "宮下 芳明" },
  "5": { name: "Long Teaser", time: "2日目 10:30—11:45", session_chair: "伊藤 貴之", chat_chair: "倉本 至" },
  "6": { name: "トップカンファレンス発表論文紹介セッション", time: "1日目 17:05—18:05", session_chair: "伊藤 貴之", chat_chair: "入江 英嗣" },
};

const paragraph_style = {
  fontSize: "0.8em",
};

const colormap = {
  "l": "rgba(89, 113, 142, 0.3)",
  "s": "rgba(108, 135, 96, 0.3)",
  "d": "rgba(210, 193, 77, 0.3)",
  "t": "rgba(150, 150, 150, 0.3)",
}

const schedule_info = {
  "1": [
    { time: "13:00", type: "info", name: "オープニング" },
    { time: "13:30", type: "live", name: "デモプレビュー" },
    { time: "14:00", type: "demo", name: "デモ・ポスターセッション1" },
    { time: "15:30", type: "rest", name: "休憩" },
    { time: "15:40", type: "talk", name: "セッション1: " + session_info["1"]["name"] },
    { time: "16:50", type: "rest", name: "休憩" },
    { time: "17:05", type: "talk", name: "トップカンファレンス発表論文紹介セッション" },
    { time: "18:05", type: "", name: "セッション終了" },
    { time: "18:30", type: "food", name: "夕食" },
    { time: "21:00", type: "night", name: "ナイトセッション" },
  ],
  "2": [
    { time: "09:00", type: "talk", name: "セッション2: " + session_info["2"]["name"] },
    { time: "10:15", type: "rest", name: "休憩" },
    { time: "10:30", type: "talk", name: session_info["5"]["name"] },
    { time: "11:45", type: "food", name: "昼食" },
    { time: "13:00", type: "live", name: "デモプレビュー" },
    { time: "13:30", type: "demo", name: "デモ・ポスターセッション2" },
    { time: "15:00", type: "rest", name: "休憩" },
    { time: "15:10", type: "talk", name: "セッション3: " + session_info["3"]["name"] },
    { time: "16:15", type: "rest", name: "休憩" },
    { time: "16:30", type: "talk", name: "セッション4: " + session_info["4"]["name"] },
    { time: "17:50", type: "", name: "セッション終了" },
    { time: "18:30", type: "food", name: "夕食" },
    { time: "21:00", type: "night", name: "ナイトセッション" },
  ],
  "3": [
    { time: "09:00", type: "live", name: "デモプレビュー" },
    { time: "09:30", type: "demo", name: "デモ・ポスターセッション3" },
    { time: "11:00", type: "rest", name: "休憩" },
    { time: "11:10", type: "info", name: "投票・アンケート記入" },
    { time: "11:30", type: "info", name: "タウンホールミーティング・クロージング (—12:00)" },
  ],
};

const icon_map = {
  "talk": "talk",
  "demo": "users",
  "live": "record",
  "food": "utensils",
  "rest": "coffee",
  "info": "info",
  "night": "users",
}

const invited_talks = [
  {
    "speaker": "粥川 青汰",
    "title": "BBeep: A Sonic Collision Avoidance System for Blind Travellers and Nearby Pedestrians",
    "authors": "Seita Kayukawa, Keita Higuchi, João Guerreiro, Shigeo Morishima, Yoichi Sato, Kris Kitani, and Chieko Asakawa",
    "venue": "In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (CHI '19)",
  },
  {
    "speaker": "矢倉 大夢",
    "title": "REsCUE: A framework for REal-time feedback on behavioral CUEs using multimodal anomaly detection",
    "authors": "Riku Arakawa and Hiromu Yakura",
    "venue": "In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (CHI '19)",
  },
  {
    "speaker": "尾形 正恭",
    "title": "Magneto-Haptics: Embedding Magnetic Force Feedback for Physical Interactions",
    "authors": "Masa Ogata",
    "venue": "In Proceedings of the 31st Annual ACM Symposium on User Interface Software and Technology (UIST '18)",
  },
];

class OneDaySchedule extends Component {
  render() {
    const day = this.props.day;

    const rows = (() => {
      var array = [];

      schedule_info[day].forEach(function(elem) {
        const icon = <Icon inverted circular style={{ opacity: 0.6 }} name={ icon_map[elem["type"]] } />

        array.push(
          <Table.Row key={ day + "_" + elem["time"] } >
            <Table.Cell>{ icon }</Table.Cell>
            <Table.Cell>{ elem["time"] }</Table.Cell>
            <Table.Cell>{ elem["name"] }</Table.Cell>
          </Table.Row>
        );
      });

      return array;
    })();

    return (
      <Table unstackable basic="very">
        <Table.Body>
          { rows }
        </Table.Body>
      </Table>
    );
  }
}

class Schedule extends Component {
  render() {
    const schedules = (() => {
      var array = [];

      for (var key in schedule_info) {
        array.push(
          <Grid.Column key={ "day_" + key }>
            <Header as="h3">{ key }日目 (9/{ 25 + parseInt(key) - 1 })</Header>
            <OneDaySchedule day={ key } />
          </Grid.Column>
        );
      }

      return array;
    })();

    return (
      <Grid stackable style={{ marginTop: "1em" }}>
        <Grid.Row columns={3}>
          { schedules }
        </Grid.Row>
      </Grid>
    );
  }
}

class TypeLabel extends Component {
  render() {
    const type = this.props.type;
    const message = (() => {
      if (type === "l") { return "Long"; }
      if (type === "s") { return "Short"; }
      if (type === "d") { return "Discussion"; }
      if (type === "t") { return "Teaser"; }
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
      talk_id,
      title,
      author_list,
      abstract,
      review_comment,
      image_file,
      type
    } = this.props;

    const is_teaser = (type === "t");

    const image_path = path_prefix + "/program/" + (image_file === "" ? "no-image.jpg" : image_file);

    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={ 16 }>[{ talk_id }] <b>{ title }</b><TypeLabel type={ type } /><br />{ author_list }</Grid.Column>
        </Grid.Row>
        {
          is_teaser
          ?
            null
          :
            <Grid.Row style={{ paddingTop: "8px", paddingBottom: "24px" }}>
              <Grid.Column width={ 4 }><Image src={ image_path } fluid rounded /></Grid.Column>
              <Grid.Column width={ 6 } style={ paragraph_style }><b>要旨：</b>{ abstract }</Grid.Column>
              <Grid.Column width={ 6 } style={ paragraph_style }><b>採録時コメント：</b>{ review_comment }</Grid.Column>
            </Grid.Row>
        }
      </Grid>
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

class InvitedTalks extends Component {
  render() {
    var talks = [];
    invited_talks.forEach(function(elem) {
      talks.push(
        <Grid.Row>
          <Grid.Column>
            { elem["speaker"] }: <b>{ elem["title"] }</b><br />{ elem["authors"] }.<br />{ elem["venue"] }
          </Grid.Column>
        </Grid.Row>
      );
    });

    return (
      <Grid>
        { talks }
      </Grid>
    );
  }
}

class SessionCell extends Component {
  render() {
    const program_data = this.props.program_data;
    const target_session = this.props.target_session;

    const items = program_data.allProgramCsv.edges.map((row, i) => (
      target_session === row.node.session_id
      ? <ProgramCell
          submission_id={ row.node.submission_id }
          talk_id={ row.node.talk_id }
          session_id={ row.node.session_id }
          title={ row.node.title }
          author_list={ row.node.author_list }
          abstract={ row.node.abstract }
          review_comment={ row.node.review_comment }
          image_file={ row.node.image_file }
          type={ row.node.type }
          key= { row.node.session_id + "_" + row.node.talk_id }
          />
      : null
    ));

    return (
      <div>
        <SessionTitle target_session={ target_session } />
        { items }
        { target_session === "6" ? <InvitedTalks /> : null }
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

class ProgramImpl extends Component {
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
        <Header as="h1">全体スケジュール</Header>
        <Schedule />
        <Divider style={{ marginTop: "2.5em", marginBottom: "2.5em" }}/>
        <Header as="h1">登壇発表・ロングティザー発表</Header>
        <Legend />
        { session_cells }
      </div>
    );
  }
}

export default class Program extends React.Component {
  render() {
    return (
      // StaticQuery is a graphql functionality for non-page component
      <StaticQuery
        query={graphql`
        query {
          allProgramCsv {
            edges {
              node {
                submission_id
                talk_id
                session_id
                title
                author_list
                abstract
                review_comment
                image_file
                type
              }
            }
          }
        }
      `}
      // Pass the data for the sub class
      render={data => <ProgramImpl program_data={ data } />} />
    );
  }
}
