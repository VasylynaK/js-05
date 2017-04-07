$(function() {
    $('#btn-send').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/v.katsma@gmail.com",
        method: "POST",
        data: {
            name: $('#client-name').val(),
            email: $('#client-email').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
    .done(function() {
        $('form').html('<h1>Thank you!</h1>');
    });
}
