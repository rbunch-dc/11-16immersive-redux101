import React, { Component } from 'react';
// We need some glue! This compontent (container) needs to know about our redux state
// So, we include teh connect method from react-redux (the glue!)
import { connect } from 'react-redux';

class ReduxStyle extends Component{
	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
		});
		this.props.students2.map((student, index)=>{
			studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
		});		
		return (
			<div>
				{studentArray}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		// From our master reducer, we have a "state" object
		// Inside our state object, we have a property: students
		// We need to set up the state of that object, to the props of this component
		students: state.students,
		students2: state.students2
	}
};

export default connect(mapStateToProps)(ReduxStyle);