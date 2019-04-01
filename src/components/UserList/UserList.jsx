import React from 'react';
import './style.css';

export default ({index, user, update}) => {
	return(
		<tr onClick={() => update({ active: index })} >
			<td>
				<img src={'images/' + user.image + '.svg'} alt={user.name}/>
			</td>
			<td className='user-name'>{user.name}</td>
			<td className='user-age'>{user.age}</td>
			<td className='user-phone'>{user.phone}</td>
			<td className='user-phrase'>{user.phrase}</td>
		</tr>
	)
};