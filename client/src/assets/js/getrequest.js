import Axios from "axios";

$( document ).ready( () => {
	
	var url = window.location;
	
	// GET REQUEST
	$("#btnGetFiles").click( (event) => {
		event.preventDefault();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
		Axios({
			type : "GET",
			url : "/api/files/getall",
			success: (data) => {
				//clear old data
				$("#listFiles").html("");
				
				/*
					render list of files
				*/
				$("#listFiles").append('<ul>');
				$.each(data, (index, file) => {
					$("#listFiles").append('<li><a href=' + url + 'api/files/' + file.id +'>' + file.name + '</a></li>');
				});
				$("#listFiles").append('</ul>');
			},
			error : (err) => {
				$("#listFiles").html(err.responseText);
			}
		});	
	}
})