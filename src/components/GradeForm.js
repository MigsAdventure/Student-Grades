import React, {Component} from 'react';
import uuid from 'uuid';
import GradeActions from '../actions/GradeActions'


export default class GradeForm extends Component {
  constructor() {
    super();
     this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const {name,totalPoints,points} = this.refs;
    let percent =points.value / totalPoints.value
    let grade = '';

    if (percent >= .90) {
      grade = 'A';
    } else if (percent < .90 && percent >= .80) {
      grade='B'
    } else if (percent < .80 && percent >= .70) {
      grade = 'C'
    } else if(percent < .70 && percent >= .60) {
      grade = 'D'
    } else {
      grade = 'F'
    }
    // A = percent >= 90
    // B = percent < 90 && percent >= 80
    // C = percent < 80 && percent >= 70
    // D = percent < 70 && percent >= 60
    // F = percent < 60

    let newAssignment = {
      name: name.value,
      points: points.value,
      totalPoints: totalPoints.value,
      grade: grade,
      id: uuid()
    }


    name.focus();

    GradeActions.newAssignment(newAssignment);
  }

  render() {
    return (
      <form onSubmit = {this.submitForm}>
        <label htmlFor="assignment">Assignment Name: </label>
        <input className='text-center' ref="name" type="text" id="assignmentName" />
        <label htmlFor="points">Points Awarded: </label>
        <input  className="text-center" ref="points" type="number" min='0'/>
        <label htmlFor="totalPoints">Total Possible: </label>
        <input className="text-center" type="number" ref="totalPoints" min='0'/>
        <div className="row col-xs-12 text-center">
          <button className='btn btn-primary'>Add</button>
        </div>
        
      </form>
      )
    }
  }
