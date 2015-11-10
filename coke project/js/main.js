$(document).ready(function()
	{
		$("#st").hide();
		$("#nd").hide();
		$("#rd").hide();


		$("#btn1").mouseenter(function(){

			$("#st").show();


		});

		$("#btn2").mouseenter(function(){
			$("#nd").show();


		});

		$("#btn3").mouseenter(function(){
			$("#rd").show();


		});

		$("#btn3").mouseleave(function(){
			$("#rd").hide();


		});

		$("#btn1").mouseleave(function(){
			$("#st").hide();


		});

		$("#btn2").mouseleave(function(){
			$("#nd").hide();


		});




	});	