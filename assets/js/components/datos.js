"use strict";

const data = (update) =>{
	const divInfo = $("<div id='info'></div>");
	const name = $("<div id='name' class= 'text-center'><h2>"+ state.datos.results[0].name.first+ " " + state.datos.results[0].name.last + "</h2></div>");
	const gender = $("<div><strong> Gender: </strong>" + state.datos.results[0].gender + "</div>");
	const city = $("<div><strong> City: </strong>" + state.datos.results[0].location.city + "</div>");
	const street = $("<div><strong> Street: </strong>" + state.datos.results[0].location.street + "</div>");
	const email = $("<div><strong> Email: </strong>" + state.datos.results[0].email + "</div>");
	const cel = $("<div><strong> Cel: </strong>" + state.datos.results[0].cell + "</div>");
	const img = $("<div><img src=' " + state.datos.results[0].picture.large + "'></div>");

	console.log(state.datos.results[0].picture.large);
	

	divInfo.append(name);
	divInfo.append(gender);
	divInfo.append(city);
	divInfo.append(street);
	divInfo.append(email);
	divInfo.append(cel);
	divInfo.append(img);
	

	return divInfo;
}