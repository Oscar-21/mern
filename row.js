import React from 'react';

class IssueRow extends React.Component {
  render() {
    const borderStyle = {
      border: '1 px solid silver',
      padding: 4,
    };
    return (
      <tr>
        <td style={borderStyle}>{this.props.issue_id}</td>
        <td style={borderStyle}>{this.props.issue_title}</td>
      </tr>
    );
  }
}