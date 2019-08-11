import { StaticQuery, graphql } from "gatsby"
import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

const session_info = {
  "1": { name: "Elephant Eggs", time: "1日目 15:40--16:50" },
  "2": { name: "Elephant Eggs", time: "2日目 09:00--10:15" },
  "3": { name: "Elephant Eggs", time: "2日目 15:10--16:15" },
  "4": { name: "Elephant Eggs", time: "2日目 16:30--17:50" },
  "5": { name: "Long Teaser", time: "2日目 10:30--11:45" },
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

    return <div>{ title }, {author_list}</div>
  }
}

class ProgramImpl extends Component {
  render() {
    const program_data = this.props.program_data;

    const items = program_data.allProgramCsv.edges.map((row, i) => (
      <ProgramCell
        submission_id={ row.node.submission_id }
        talk_id={ row.node.talk_id }
        session_id={ row.node.session_id }
        title={ row.node.title }
        author_list={ row.node.author_list }
        abstract={ row.node.abstract }
        review_comment={ row.node.review_comment }
        image_file={ row.node.image_file }
        type={ row.node.type }
        />
    ));
    return <div><Header>Hello World!</Header>{ items }</div>
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
