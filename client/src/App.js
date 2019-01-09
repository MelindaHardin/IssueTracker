import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


const issues = [
  { id: "1",
    status: "Open",
    owner: "Ravan",
    created: new Date ('2016-8-15'),
    effort: 5,
    completionDate: undefined,
    title: "Eror in console when clicking add"
  },
  
  { id: "2",
  status: "Assigned",
  owner: "Eddie",
  created: new Date ('2016-8-16'),
  effort: 14,
  completionDate: new Date ("2016-08-30"),
  title: "Missing bottom border on panel"
  },
];

class IssueFilter extends Component {
  render() {

    return (
      <div className="">
        <p>This is a placeholder for filter</p>
      </div>
    );
  }
} 


class IssueAdd extends Component {
  render() {

    return (
      <div className="">
          <p>This is a placeholder for adding issues.</p>
      </div>
    );
  }
} 


class IssueRow extends Component {
  render() {
    const issue = this.props.issue;

    return (
      <div className="">
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.completionDate ? issue.completionDate.toDateString() : ""}</td> 
        <td>{issue.title}</td>
      </tr>
      </div>
    );
  }
} 



class IssueTable extends Component {
  render() {

    const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue= {issue} />)

    return (
      <div>
        <table className="bordered-table">
          <thead>
            <th>ID</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
          </thead>
        <tbody>
          {issueRows}
        </tbody>
      </table>
      </div>
    );
  }
} 



class IssueList extends Component {
  render() {

    return (
      <div>
     
      <h1>Issue Tracker</h1>
        <IssueFilter />
        <IssueTable issues = {issues} />
        <IssueAdd />
      </div>
    );
  }
}

export default IssueList;
