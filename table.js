import React from 'react';

class IssueTable extends React.Component {
  render() {
    const borderedStyle = {
      border: '1 px solid silver',
      padding: 4,
    };
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        
          <IssueRow
            issue_id={1}
            issue_title="Error in console when clicking Add"
          />

          <IssueRow
            issue_id={2}
            issue_title="Missing bottom border on panel"
          />

        </tbody>
      </table>
    );
  }
}