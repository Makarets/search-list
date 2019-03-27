import React from 'react';
import './style.css';

const UserCard = (props) => {

    const user = props.data[props.active];
    return(
        <table className='user-card-block'>
            <tbody>
            <tr>
                <td colSpan='2' className='card-avatar'>
                    <img src={'images/' + user.image + '.svg'} alt={user.name}/>
                </td>
            </tr>
            <tr>
                <td colSpan='2' className='card-name'>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Animal</td>
                <td>{user.image}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{user.phone}</td>
            </tr>
            <tr>
                <td colSpan='2' className='card-phrase'>
                    <div>
                        <span>Crown phrase: </span>{user.phrase}
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    )
};

export default UserCard;