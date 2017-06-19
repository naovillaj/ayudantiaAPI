// $(_=>{
// 	$.get('https://randomuser.me/api/', (data) =>{
// 			console.log(data);

//   	 });
// });


"use strict";

const render = (root) =>{
	root.empty();
	root.append(data());

}

const state = {
	datos: null
};

$(_=>{
	$.get("https://randomuser.me/api/", (json) =>{
		if(!json){
			return alert("error.message");
		}
		state.datos = json;
		console.log(json);
		const root = $("#root");
		render(root);
	});
})