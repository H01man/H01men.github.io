$(document).ready(function(){
    $('.menu').hide()
    $('.nav-toggle').on('click', function(){
        $('.menu').fadeToggle(400);
        $('body').background(opacity(30))
    })
})