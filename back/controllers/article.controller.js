const Article = require('../Models/Article.mysql');

exports.create = async function(req,res) {
    const articles = new Article({
        title: req.body.title,
        author: req.body.author,
        content : req.body.content,
        date: req.body.date
    });

    await Article.create(articles, async (err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({data:data});
    })
}

exports.getAll = async function(req,res){
    await Article.getAll((err , data ) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({data:data});
    })
}
exports.getOne = async function(req,res){
    await Article.getOne(req.params.id, (err , data ) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({data:data});
    })
}

exports.updateById = async function(req,res) {
    const article = new Article({
        title: req.body.title,
        author: req.body.author,
        content : req.body.content,
        date: req.body.date
    });

    await Article.updateById(req.params.id, article,(err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({data:data});
    })
}

exports.deleteById = async function(req,res) {

    await Article.deleteById(req.params.id,(err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({data:data});
    })
}
