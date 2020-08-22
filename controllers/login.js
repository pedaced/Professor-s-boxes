const models = require('../models');

exports.show_index = (req, res, next) => {
    res.sendFile('login.html', {root: './public'});
}

exports.authenticate = (req, res, next) => {
    let username = req.body.username;
    let passwd = req.body.password;

    models.Faculty.findOne({
        where: {
            username: username
        }
    }).then((faculty) => {
        if(faculty.password == passwd)
            res.redirect('/' + faculty.id + '?faculty=' + faculty.facultyName);
        else
            res.sendStatus(401);
    }).catch(err => {
        console.log(err);
    })

}