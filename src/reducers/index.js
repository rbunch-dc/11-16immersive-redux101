// This is our master reducers file. It doesn't manage any particular peice of state.
// It manages/contains all the other reducers (which contain a peice of state)

// Get the combineReducers method from redux
import { combineReducers } from 'redux';

// Import each reducer here. 
// First: StudentReducer
import StudentReducer from './StudentReducer'
import StudentReducer2 from './StudentReducer2'

const rootReducer = combineReducers({
	// Inside here, we pass each reducer as a key/property
	// Each property/key will be available as state.key
	students: StudentReducer,
	students2: StudentReducer2,

});

export default rootReducer;