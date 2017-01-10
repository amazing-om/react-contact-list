import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList.js';


let contacts =[
	{
		id:1,
		name:"Om",
		phone:"123 1234 12334"
	},
	{
		id:2,
		name:"Ved",
		phone:"123 1234 12335"
	},
	{
		id:3,
		name:"Scott",
		phone:"123 1234 12336"
	},
	{
		id:4,
		name:"Summers",
		phone:"123 1234 12337"
	}
]

class App extends React.Component{
	render(){
		return(
				<div>
					<h1>Contact List</h1>
					<ContactList contacts={this.props.contacts}/>
				</div>
			)
	}
}

ReactDOM.render(<App contacts={contacts}/>, document.getElementById("app"));