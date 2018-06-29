import './index.css';
//import numeral from 'numeral';
import {getUsers} from './api/userApi';

/*eslint-disable no-console*/
/*eslint-disable no-unused-vars*/
/*eslint-disable no-undef*/

//Populate table of users via API call
getUsers().then(result =>
{
	let usersBody = "";

	result.forEach(user => {
		usersBody += `<tr>
			<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
			<td>${user.id}</td>
			<td>${user.firstName}</td>
			<td>${user.lastName}</td>
			<td>${user.email}</td>
			</tr>`
	});

	global.decodeURIComponent.getElementById('users').innetHTML = userBody;

});
//const courseValue = numeral(1000).format('$0,0.00');
//debugger; //eslint-disable-line no-debugger
//console.log('I would pay $',courseValue,' for this awesome course!');
