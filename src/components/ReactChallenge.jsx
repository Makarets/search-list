import React from 'react';
import UserData from '../data.json';
import Table from 'react-bootstrap/Table';
import UserList from './UserList/UserList';
import UserCard from './UserCard/UserCard';
import Search from './Search/Search';

class ReactChallenge extends React.Component {
	constructor(props) {
		super(props);

        this.initialData = UserData;

		this.state = {
			data: this.initialData,
			active: 0,
		}

	}

	update = (config) => {
		this.setState(config)
	};

	render() {
		const state = this.state;

		const users = state.data.map((user, index) => {
			return (<UserList
				user={user}
				index={index}
				update={this.update}
			/>);
		});

     	if(!state.data[state.active]) {
     		return (
     			<div>
     				<Search update={this.update} data={this.initialData} />
     				<h1>Nothing found :(</h1>
     			</div>
     		);
     	}
		return(
		    <div>
		    	<Search update={this.update} data={this.initialData} />
				<Table striped bordered hover className='main-table'>
					<tbody>
						{users}
					</tbody>
				</Table>
				<UserCard active={state.active} data={state.data}/>
            </div>
		);
	}
}

export default ReactChallenge;