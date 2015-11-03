$(document).ready(function()
	{	
		$("h1").mouseenter(function()
		{
			// $(this).fadeToggle(1000).fadeIn();
			$(this).slideUp().slideDown();


		});

		$("#project1 h5").hide();

		$("#project1  img").mouseenter(function()
			{

				$("#project1 h5").show(150);

			});
		$("#project1 img").mouseleave(function()
			{
				$("#project1 h5").hide(150);

			});
		$("#project1 img").mouseenter(function()

			{
				$(".container h2").css("color", "#C6FF00");

			});
		$("#project1 img").mouseleave(function()
			{
				$(".container h2").css("color", "#1565C0")

			});
		
		
	});