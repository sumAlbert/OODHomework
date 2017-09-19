$(document).ready(function(){

    $.ajax({
       type: "post",
        url: "HomeWorkAjax1",
        success: function (data) {
            console.log("succcess");
        },
        error: function () {
            console.log("error");
        }
    });
});