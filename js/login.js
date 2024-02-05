$('#go-login').click(function (e) { 
          e.preventDefault();
          $('.img').addClass('signup');
          $('.signin-form').removeClass('active');
          $('.signup-form').removeClass('active');
});
$('#go-signup').click(function (e) { 
          e.preventDefault();
          $('.img').removeClass('signup');
          $('.signin-form').addClass('active');
          $('.signup-form').addClass('active');
});
