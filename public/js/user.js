/**
 * Created by Somebody on 9/6/2018.
 */

var User = new function(){
    this.get_users = function(){
        $("#table_data").html("");
        var url="http://localhost:3000/users";
        Ajax.make_ajax(url,"GET","",User.get_users_return);
    };

    this.get_users_return = function (result) {
        var html = "<div class='table-responsive'>" +
                    "<table class='table table-bordered'>"+
                    "<thead class='thead-dark'><tr>";
        for(var k in result["data"]["users"]){
            html += "<tr>";
            html += "<td>" + result["data"]["users"][k]["id"] + "</td>";
            html += "<td>" + result["data"]["users"][k]["name"] + "</td>";
            html += "<td>" + result["data"]["users"][k]["age"] + "</td>";
            html += "<td>" + result["data"]["users"][k]["cash"] + "</td>";
        }
        html += "</tr>";
        html += "</table>";
        html += "</div>";

        $("#table_data").html(html);
    }





};
