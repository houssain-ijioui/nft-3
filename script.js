$(document).ready(() => {
    $('.sale-btn').css({"border":"2px solid white", "color": "white"})
    $('.sale-btn').click(function() {
        $(this).css({"border":"2px solid white", "color": "white"})
        $(".soon").css({"border":"none", "color":"#6A687C"})
    })

    $('.soon').click(function() {
        $(this).css({"border":"2px solid white", "color": "white"})
        $(".sale-btn").css({"border":"none", "color":"#6A687C"})
    })
})


