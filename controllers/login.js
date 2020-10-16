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

exports.seed = (req, res, next) => {
    let facultyId = req.params.id;
    console.log(facultyId);

    for(let i = 1; i <= 9; i++) {
        models.Box.create({
            id: (facultyId-1)*9 + i,
            facultyId: facultyId
        }).then(console.log('created' + i));
    }
}

exports.show_all = (req, res, next) => {
    let id = req.params.id;

    models.Box.findAll({
        where: {
            facultyId: id
        }
    }).then((box) => {
        console.log(box);
    }).catch((err) => {
        console.log(err);
    })
}