import redux from './redux';
import projectRedux from './projectRedux';
import { combineReducers } from 'redux';

const rootRedux = combineReducers({
    authenication: redux,
    project: projectRedux
});

export default rootRedux;