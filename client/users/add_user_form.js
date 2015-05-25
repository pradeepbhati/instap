Template.addUserForm.events({
	'submit form': function(event){
		event.preventDefault();
		var companyName = event.target.companyName.value;
		var email = event.target.email.value;
		var mobile = event.target.mobile.value;
		var password = event.target.password.value;
		var confirmPassword = event.target.confirmPassword.value;

		// Removing Error Class
		$(event.target.companyName).removeClass('errorClass');
		$(event.target.email).removeClass('errorClass');
		$(event.target.mobile).removeClass('errorClass');
		$(event.target.password).removeClass('errorClass');
		$(event.target.confirmPassword).removeClass('errorClass');

		$(event.target).find('.registration-failed').addClass('hidden');
		$(event.target).find('.registration-sucessful').addClass('hidden');




		
		var formError = false;

		// Validating Fields in Sign Up Form
		if(companyName == "Company Name" || companyName == ""){
			$(event.target.companyName).addClass('errorClass');
			formError = true;
		}
		if(email == "Email" || email == ""){
			$(event.target.email).addClass('errorClass');
			formError = true;
		}
		if(mobile == "Phone Number" || mobile == ""){
			$(event.target.mobile).addClass('errorClass');
			formError = true;
		}
		if(password == "Password" || password == ""){
			$(event.target.password).addClass('errorClass');
			formError = true;
		}
		if(confirmPassword == "Confirm Password" || confirmPassword == "" || confirmPassword != password){
			$(event.target.confirmPassword).addClass('errorClass');
			formError = true;
		}
		
		if(!formError){
			Users.insert({
				email: email,
				mobile: mobile,
				company: companyName,
				password: password 
			});

			event.target.companyName.value = "Company Name";
			event.target.email.value = "Email";
			event.target.mobile.value = "Phone Number";
			event.target.password.value = "Password";
			event.target.confirmPassword.value = "Confirm Password";

			$(event.target).find('.registration-sucessful').removeClass('hidden');
		}

		else{
			$(event.target).find('.registration-failed').removeClass('hidden');
		}
    }
})