import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events';
import Storage from '../Storage';



let _assignments = Storage.read('assignments') || []; 

class GradeStore extends EventEmitter { 
  constructor() {
    super(); 


    AppDispatcher.register(action => {        
      switch(action.type) {
        case 'ASSIGNMENT_CREATE' :
          let {assignment} = action.payload;         
          _assignments.push(assignment);
          this.getTotals();
          this.emit('CHANGE');
          break;

        case 'REMOVE_ASSIGNMENT' :
          let {remove} = action.payload;
          let newAssignments = _assignments.map((assignment) => {
            if(assignment.id === remove.id) {
              return remove;
            } else {
              return assignment;
            }                             
          }) //map end
          _assignments = newAssignments; 
          console.log(_assignments)
          this.emit('CHANGE');
          break; 
                                        
        }  //switch end

    this.on('CHANGE', () => {
      Storage.write('assignments', _assignments);
    }); // on change end
                                           
  }) //AppDispatcher
} //end of constructor
  startListening(cb) {                      
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb);
  }

  getTotals() {
   let totalPoints = _assignments.reduce((a,b) => (parseFloat(a.totalPoints) + parseFloat(b.totalPoints)));
   console.log(totalPoints);
  }

  getAll() {
    return _assignments;
  }
} //end of class
 
export default new GradeStore(); 