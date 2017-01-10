import React from 'react';


//class Contact extends React.Component{
const Contact = ({contact, item }) =>
	<li>
		{contact.name} : {contact.phone} :{item}
	</li>


export default Contact;