import React from 'react';
import './style.css';

const UserCard = (props) => (

    <table className='user-card-block'>
        <tbody>
        <tr>
            <td colSpan='2' className='card-avatar'>
                <img src={'images/' + props.avatar + '.svg'} alt={props.name}/>
            </td>
        </tr>
        <tr>
            <td colSpan='2' className='card-name'>{props.name}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>{props.age}</td>
        </tr>
        <tr>
            <td>Animal</td>
            <td>{props.avatar}</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>{props.phone}</td>
        </tr>
        <tr>
            <td colSpan='2' className='card-phrase'>
                <div>
                    <span>Crown phrase: </span>{props.phrase}
                </div>
            </td>
        </tr>
        </tbody>
    </table>
);

export default UserCard;