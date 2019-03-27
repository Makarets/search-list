import React from 'react';
import UserData from '../data.json';
import Table from 'react-bootstrap/Table';
import UserList from './UserList/UserList';
import UserCard from './UserCard/UserCard';

class ReactChallenge extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0,
		}
	}

	activeCard = (config) => {
		this.setState(config)
	};


	render() {
		const infoCard = this.state.infoCard;

		const users = UserData.map((element, index) => {
			return (<UserList
				index={index}
				id={element.id}
				age={element.age}
				name={element.name}
				phone={element.phone}
				avatar={element.image}
				phrase={element.phrase}
				activeCard={this.activeCard}
			/>);
		});
		return(
		    <div>
				<Table striped bordered hover className='main-table'>
					<tbody>
						{users}
					</tbody>
				</Table>
				<UserCard active={this.state.active} data={UserData}/>
            </div>
		);
	}
}

export default ReactChallenge;