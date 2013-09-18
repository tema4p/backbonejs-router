var app = app || {};

//выполняем код после полной загрузки js-файлов
$(function () {
    app.router = new Router();
    $('#search').on('click',function(){
        var query = $('#query').val();
        var category = $('#category').val();
        app.router.navigate("first/"+query+"/"+category, {trigger: true});
        return false;
    });
});



