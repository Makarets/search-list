import React from 'react';
import './style.css';	

export default ({data, update}) => {

	const dataSearch = (e) => {
		const value = e.target.value.toLowerCase();
		const filter = data.filter(user => {
			return user.name.toLowerCase().includes(value);
		});

		update({
	 		data: filter,
	 		active: 0,
	 	});
	};

	return (
		<input  
			type='text' 
			onChange={dataSearch}
		/>
	)
};
