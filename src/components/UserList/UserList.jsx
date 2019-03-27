import React from 'react';
import './style.css';

const UserList = (props) => {

	function checkactiveCard() {
 		props.activeCard({
			age: props.age,
			name: props.name,
			phone: props.phone,
			avatar: props.avatar,
			phrase: props.phrase,
		});
 	};

	function onload() {
		if(props.index == 0) {
			props.activeCard({
				age: props.age,
				name: props.name,
				phone: props.phone,
				avatar: props.avatar,
				phrase: props.phrase,
			});
		}
	};

	return(
		<tr onClick={checkactiveCard} onLoad={onload}>
			<td>
				<img src={'images/' + props.avatar + '.svg'} alt={props.name}/>
			</td>
			<td className='user-name'>{props.name}</td>
			<td className='user-age'>{props.age}</td>
			<td className='user-phone'>{props.phone}</td>
			<td className='user-phrase'>{props.phrase}</td>
		</tr>
	)
};

export default UserList;