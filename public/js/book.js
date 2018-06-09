/**
 * Created by Somebody on 9/6/2018.
 */

var Book = new function(){
    this.get_books = function(){
        $("#table_data").html("");
        var url="http://localhost:3000/books";
        Ajax.make_ajax(url,"GET","",Book.get_books_return);
    };

    this.get_books_return = function (result) {
        console.log(result);
        tttt = result;
        var html = "<div class='table-responsive'>" +
                    "<table class='table table-bordered'>"+
                    "<thead class='thead-dark'><tr>";
        for(var k in result["data"]["books"]){
            html += "<tr>";
            html += "<td>" + result["data"]["books"][k]["id"] + "</td>";
            html += "<td>" + result["data"]["books"][k]["name"] + "</td>";
            html += "<td>" + result["data"]["books"][k]["price"] + "</td>";
        }
        html += "</tr>";
        html += "</table>";
        html += "</div>";

        $("#table_data").html(html);
    }





};
