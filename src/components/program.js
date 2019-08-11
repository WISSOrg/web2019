import { StaticQuery, graphql } from "gatsby"
import React, { Component } from 'react';
import { Divider, Header, Grid } from 'semantic-ui-react';

const session_info = {
  "1": { name: "Elephant Eggs", time: "1日目 15:40--16:50", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "2": { name: "Elephant Eggs", time: "2日目 09:00--10:15", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "3": { name: "Elephant Eggs", time: "2日目 15:10--16:15", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "4": { name: "Elephant Eggs", time: "2日目 16:30--17:50", session_chair: "（TBA）", chat_chair: "（TBA）" },
  "5": { name: "Long Teaser", time: "2日目 10:30--11:45", session_chair: "（TBA）", chat_chair: "（TBA）" },
};

const paragraph_style = {
  fontSize: "0.8em",
};

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

    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>[{ talk_id }] <b>{ title }</b></Grid.Column>
          <Grid.Column>{ author_list }</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column><div style={ paragraph_style }><b>要旨：</b>{ abstract }</div></Grid.Column>
          <Grid.Column><div style={ paragraph_style }><b>採録時コメント：</b>{ review_comment }</div></Grid.Column>
        </Grid.Row>
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

    const title = (target_session === "5" ? "" : "セッション" + target_session + ": ") + session_info[target_session]["name"];

    return <div><Header as="h2">{ title }</Header>{ items }</div>
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
        array.push(<Divider key={ "session_divider_" + key }/>)
      }

      return array;
    })();

    return <div><Header as="h1">登壇発表・ロングティザー発表</Header>{ session_cells }</div>
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
