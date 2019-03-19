$(document).ready(function (){
	
	$("button").click(function(){
		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt="+$("#count").val()+"&appid=f7cab0d0a7637beecb64e550b7b66235"
		}).then(function(data){
			console.log(data);
			$(data.list).each(function(index){
				console.log(data.list[index].name);
			})
		})
	})
	
})