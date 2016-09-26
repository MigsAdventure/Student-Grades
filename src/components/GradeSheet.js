import React ,{Component} from 'react';
import GradeStore from '../stores/GradeStore'
import GradeActions from '../actions/GradeActions'
import GradeForm from './GradeForm'
import GradeTable from './GradeTable'

export default class GradeSheet extends Component {
  constructor() {
    super();
    this.state = {
     student: GradeStore.getAll(),
    }

  this._onChange = this._onChange.bind(this);
  }

  componentDidMount () {
    GradeStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    GradeStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      student: GradeStore.getAll('student')
    })
  }

  


  render() {
    return (
      <div>
      <h1>Student's Grade</h1>
      <GradeForm/>
      <GradeTable/>
      </div>
      )
  } //end of render

} //end of class
