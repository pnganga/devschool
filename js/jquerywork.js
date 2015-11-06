$(document).ready(function()
	{	
		$("h1").mouseenter(function()
		{
			// $(this).fadeToggle(1000).fadeIn();
			// $(this).slideUp().slideDown();


		 });

		// $("#project1 h5").hide();

		// // $("#project1  img").mouseenter(function()
		// 	{

		// 		// $("#project1 h5").show(150);

		// 	});
		// // $("#project1 img").mouseleave(function()
		// 	{
		// 		$("#project1 h5").hide(150);

		// 	});
		// // $("#project1 img").mouseenter(function()

		// 	{
		// 		$(".container h2").css("color", "#C6FF00");

		// // 	});
		// // $("#project1 img").mouseleave(function()
		// 	{
		// 		$(".container h2").css("color", "#1565C0")

		// 	});

		$("#contact-form").on("submit",function(e)
		{
			url = '/';

			data = $(this).serialize();

			console.log(data);

			$.post(url, data)
			

			// prevents the default behaviour of the form
			e.preventDefault();
		});

		// validating my form user inputs.
		$("#contact-form").validate(
			{
				rules: {
					fullname: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					}

				},
				messages:{

					fullname: "Please enter your full Names",
					email: {
						required: "email cannot be empty",
						email: "Please use the format name@domain.com"

					}

				},
				highlight: function(element)
				{
					$(element).addClass("error");


				
				}


			});

             $( "#accordion" ).accordion();
 
		
		
	});