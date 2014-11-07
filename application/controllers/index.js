
/*
 *
 */

//index function
var indexController = {
    index:function(req, res){
        var data = {
            title: "Sleek.js"
        }
        //load index.html from home directory
        system.loadView(res,'home/index', data);
    }
}

module.exports = indexController;