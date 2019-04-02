import React from 'react';
import UserData from '../data.json';
import Table from 'react-bootstrap/Table';
import UserList from './UserList/UserList';
import UserCard from './UserCard/UserCard';
import Search from './Search/Search';
import './main.css';

class ReactChallenge extends React.Component {
	constructor(props) {
		super(props);

        this.initialData = UserData;

		this.state = {
			data: this.initialData,
			active: 0,
            scrollHandler: 'card',
		}

	}

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = (event) => {
        if (window.pageYOffset > 200) {
            this.setState({
                scrollHandler: 'card-top'
            })
        }else {
            this.setState({
                scrollHandler: 'card'
            })
        }
    };

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
                <div className='wrapper'>
                    <div className='main-table-block'>
                        <Search update={this.update} data={this.initialData} />
                        <h1 className='not-found'>Nothing found :(</h1>
                    </div>
                    <UserCard active={state.active} data={state.data} id={state.scrollHandler}/>
                </div>
     		);
     	}
		return(
		    <div className='wrapper'>
                <div className='main-table-block'>
                    <Search update={this.update} data={this.initialData} />
                    <Table striped bordered hover className='main-table'>
                        <tbody>
                        {users}
                        </tbody>
                    </Table>
                </div>
				<UserCard active={state.active} data={state.data} id={state.scrollHandler}/>
            </div>
		);
	}
}

export default ReactChallenge;