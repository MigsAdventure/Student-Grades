import React from 'react';
import {render} from 'react-dom';
import './stores/GradeStore';
import GradeSheet from './components/GradeSheet';

render(
  <GradeSheet/>, document.getElementById('root')
  )