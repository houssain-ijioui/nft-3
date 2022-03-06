$(document).ready(() => {
    $('#login').css({"background": "linear-gradient(to right, #FC656D, #EF187A, #AA5FED, #478DFC)", "position": "relative", "left": "32px", "opacity": "0.99"})
    $('#login').click(function() {
        $(this).css({"background": "linear-gradient(to right, #FC656D, #EF187A, #AA5FED, #478DFC)", "position": "relative", "left": "40px", "opacity": "0.99"})
        $("#register").css({"background": "black"})
    })
    $('#register').click(function() {
        $(this).css({"background": "linear-gradient(to right, #FC656D, #EF187A, #AA5FED, #478DFC)"})
        $('#login').css({"background": "black"})
    })
})