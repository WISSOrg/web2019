import { StaticQuery, graphql } from "gatsby"
import React, { Component } from 'react';
import { Divider, Grid, Header, Icon, Image, Label, List, Segment, Table } from 'semantic-ui-react';

const session_info = {
  "1": { name: "Elephant Eggs", time: "1日目 15:40—16:50", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "2": { name: "Elephant Eggs", time: "2日目 09:00—10:15", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "3": { name: "Elephant Eggs", time: "2日目 15:10—16:15", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "4": { name: "Elephant Eggs", time: "2日目 16:30—17:50", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "5": { name: "Long Teaser", time: "2日目 10:30—11:45", session_chair: "（TBA）", chat_chair: "（TBA）" },
};

const paragraph_style = {
  fontSize: "0.8em",
};

const colormap = {
  "l": "rgba(89, 113, 142, 0.3)",
  "s": "rgba(108, 135, 96, 0.3)",
  "d": "rgba(210, 193, 77, 0.3)",
}

const schedule_info = {
  "1": [
    { time: "13:00", type: "info", name: "オープニング" },
    { time: "13:30", type: "live", name: "デモ中継" },
    { time: "14:00", type: "demo", name: "デモ・ポスターセッション1" },
    { time: "15:40", type: "talk", name: "セッション1: " + session_info["1"]["name"] },
    { time: "16:50", type: "rest", name: "休憩" },
    { time: "17:05", type: "", name: "（調整中）" },
    { time: "18:05", type: "", name: "セッション終了" },
    { time: "18:30", type: "food", name: "夕食" },
    { time: "??:??", type: "", name: "（TBA）" },
  ],
  "2": [
    { time: "09:00", type: "talk", name: "セッション2: " + session_info["2"]["name"] },
    { time: "10:15", type: "rest", name: "休憩" },
    { time: "10:30", type: "talk", name: session_info["5"]["name"] },
    { time: "11:45", type: "food", name: "昼食" },
    { time: "13:00", type: "live", name: "デモ中継" },
    { time: "13:30", type: "demo", name: "デモ・ポスターセッション2" },
    { time: "15:10", type: "talk", name: "セッション3: " + session_info["3"]["name"] },
    { time: "16:15", type: "rest", name: "休憩" },
    { time: "16:30", type: "talk", name: "セッション4: " + session_info["4"]["name"] },
    { time: "17:50", type: "rest", name: "休憩" },
    { time: "??:??", type: "", name: "（TBA）" },
  ],
  "3": [
    { time: "??:??", type: "", name: "（TBA）" },
  ],
};

const icon_map = {
  "talk": "talk",
  "demo": "users",
  "live": "record",
  "food": "utensils",
  "rest": "coffee",
  "info": "info",
}

class OneDaySchedule extends Component {
  render() {
    const day = this.props.day;

    const rows = (() => {
      var array = [];

      schedule_info[day].forEach(function(elem) {
        const icon = <Icon circular inverted name={ icon_map[elem["type"]] } />

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
      <Table>
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
            <Header as="h4">{ key }日目</Header>
            <OneDaySchedule day={ key } />
          </Grid.Column>
        );
      }

      return array;
    })();

    return (
      <Grid stackable>
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
      return null;
    })();

    if (type === "t") { return null; }

    return (
      <Label horizontal style={{ backgroundColor: colormap[type], marginLeft: "0.6em" }}>{ message }</Label>
    );
  }
}

class ProgramCell extends Component {
  render() {
    const {
      submission_id,
      talk_id,
      session_id,
      title,
      author_list,
      abstract,
      review_comment,
      image_file,
      type
    } = this.props;

    const is_teaser = (type === "t");

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
              <Grid.Column width={ 4 }><Image src="https://via.placeholder.com/300x200?text=No+Image" fluid rounded /></Grid.Column>
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

    const title = (target_session === "5" ? "" : "セッション" + target_session + ": ") + session_info[target_session]["name"];

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
      </div>
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
        <Divider />
        <Header as="h1">登壇発表・ロングティザー発表</Header>
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
