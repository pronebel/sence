

var apiController = {
    cmd:function(req, res){

        var cmd = req.param("cmd");
        var json = req.param("json");

        var cmdArr = cmd.split("_");



        var __mod = system.getModel(cmdArr[0]);
        var __params = JSON.parse(decodeURIComponent(json));
        console.log(__mod);

        console.log(__params);


        __mod[cmdArr[1]](__params, function(retJSON){
            res.json(retJSON);
        });


     /*   res.json([
            { name: '住宿',price:100,desc:"ddddddd",shown:false },
            { name: '导游',price:100,desc:"ddddddd",shown:false },
            { name: '美食' ,price:100,desc:"ddddddd",shown:false}
        ])*/
    }
};

module.exports = apiController;