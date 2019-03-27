import React from 'react';
import UserData from '../data.json';
import Table from 'react-bootstrap/Table';
import UserList from './UserList/UserList';
import UserCard from './UserCard/UserCard';

class ReactChallenge extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			infoCard: {
				age: '',
				name: '',
				phone: '',
				avatar: '',
				phrase: '',
			},
		}
	}

	activeCard = (elem) => {
		this.setState({
			infoCard: elem
		})
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
				<UserCard
					age={infoCard.age}
					name={infoCard.name}
					phone={infoCard.phone}
					avatar={infoCard.avatar}
					phrase={infoCard.phrase}
				/>
            </div>
		);
	}
}

export default ReactChallenge;