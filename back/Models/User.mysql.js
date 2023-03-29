const sql = require('../config/mysql');

const User = function(User) {
    this.username = User.username;
    this.password = User.password;
    this.role = User.role;
}

User.create = (newUser, result) => {
    sql.query('INSERT INTO user SET ?', newUser, (err,res) => {
        if(err){
            result(err,null)
            return;
        }
        result(null,{id:res.insertId, ...newUser})
    })
}

User.getAll = (result) => {
    sql.query('SELECT * FROM user', (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

User.getOne  = (id, result) => {
    sql.query(`SELECT * FROM user WHERE id=${id}`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

User.getOneByUsername = (username, result ) => {
    sql.query(`SELECT * FROM user WHERE username = '${username}'`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null,{data:res})
    })
}


module.exports = User;