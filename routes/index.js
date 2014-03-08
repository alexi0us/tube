
/*
 * GET home page.
 */

exports.index =  function(db)
    {
        return function(req, res){
        var collection = db.get('district');
        var c = req.cookies
        console.log(c)
        collection.find({},{},function(e,docs){
            console.log(docs)
            res.render('index', {
                "stations" : docs
            });
        });

    };
};