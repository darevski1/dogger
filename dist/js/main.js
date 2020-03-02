$(document).ready(function () {
    $(".faqs").hide();
    $(".h33").click(function () {
        var ids = $(this).attr('data-id');

        $('data-p=' + ids).toggle();

    });


});