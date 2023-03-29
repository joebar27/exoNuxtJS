const sql = require('../config/mysql');

const Comment = function(Comment) {
    this.title = Comment.title;
    this.author = Comment.author;
    this.content = Comment.content;
    this.date = Comment.date;
}

Comment.create = (newArticle, result) => {
    sql.query('INSERT INTO comment SET ?', newArticle, (err,res) => {
        if(err){
            result(err,null)
            return;
        }
        result(null,{id:res.insertId, ...newArticle})
    })
}

Comment.getAll = (result) => {
    sql.query('SELECT * FROM comment', (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

Comment.getOne  = (id, result) => {
    sql.query(`SELECT * FROM comment WHERE id=${id}`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

Comment.updateById = (id,comment, result ) => {
    sql.query(`UPDATE comment SET title = ? ,  author = ? ,  content = ? ,  date = ?  WHERE id = ${id} `,
        [comment.title,comment.author,comment.content,comment.date], (err,res) => {
            if(err){
                result(err,null);
                return;
            }
            result(null,{data:res})
        })
}
Comment.deleteById = (id, result ) => {
    sql.query(`DELETE FROM comment WHERE id = ${id}`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null,{data:res})
    })
}


module.exports = Comment;