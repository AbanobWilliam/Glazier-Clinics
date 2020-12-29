$(document).ready(function () {
    $('#sendEmail').on('click', function () {
        var emailregex =
            /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        if (new RegExp(emailregex).test($('#subscribe').val())) {
            //POST TO API and fade in
            $('.signup-home-alert').fadeIn(1500);
        } else {
            $('#subscribeError').fadeIn(1000).fadeOut(5000);
        }
    });
});