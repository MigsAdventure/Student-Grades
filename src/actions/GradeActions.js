import AppDispatcher from '../AppDispatcher';

const GradeActions = {
  newAssignment(assignment) {
    AppDispatcher.dispatch({
      type: 'ASSIGNMENT_CREATE',
      payload: {assignment}
    })
  },

  removeAssignment(remove) {
    AppDispatcher.dispatch({
      type:'REMOVE_ASSIGNMENT',
      payload: {remove}
    })
  }

}

export default GradeActions;