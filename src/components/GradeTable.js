import React, {Component} from 'react';
import GradeActions from '../actions/GradeActions';
import GradeStore from '../stores/GradeStore'

export default class GradeTable extends Component {
  constructor () {
    super();
    this.state = {
      assignments: GradeStore.getAll() 
    }
  }

  removeAssignment(e){
    let removeThis = e.target;
    GradeActions.removeAssignment(removeThis);
  }

  render() {
    const {assignments} = this.state;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th>Possible Points</th>
            <th>Grade</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            assignments.map(assignment => {
              let {name,points,totalPoints,grade,id} = assignment;

                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{points}</td>
                    <td>{totalPoints}</td>
                    <td>{grade}</td>
                    <td>
                      <button className="btn btn-danger" id ={id} onClick={this.removeAssignment}>X</button>
                    </td>
                  </tr>
                  )
            
            })
          }
        </tbody>
      </table>
      )
  }
}
