/**
 * Created by Somebody on 9/6/2018.
 */


var Ajax = new function(){
    this.make_ajax = function(url,method,data,callback){
        var n = url.lastIndexOf('/');
        var result = url.substring(n + 1);
        $.ajax({
            method:method,
            url: url ,
            data:data,
            success: function(result){
                callback(result);
            }});

        window.history.pushState({href: result}, '', result);
    }
};
