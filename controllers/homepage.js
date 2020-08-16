const models = require('../models');
var facultyId = 0;
var facultyName = '';

exports.generate = (req, res, next) => {
    let welcome = `پنل مدیریت ${req.query.faculty}`;
    //res.send(welcome);
    facultyId = req.params.id;
    console.log(facultyId);
    facultyName = req.query.faculty;
    // for(let i = 1; i < 10; i++) {
    //     models.Box.create({
    //         id: 9*facultyId + i - 9,
    //         facultyId: facultyId,
    //     }).then(result => console.log('box 1 created')).catch(err => console.log(err));
    // }
    models.Box.findAll({
    }).then(box => {
        res.send(box);
    })
}

exports.edit = (req, res, next) => {
    let id = req.body.id;
    let prof = req.body.prof;
    let email = req.body.email;
    let facultyId =  req.body.facultyId;
    let mobileNo = req.body.mobileNo;

    models.Box.update({

        facultyId: facultyId,
        professor: prof,
        email: email,
        mobileNo: mobileNo,
    },
    {
        where:{
            id: (facultyId-1)*9 + id
        }
    }
    ).then(result => {
        console.log(result);
        res.redirect('/'+ id);
    }).catch(err => console.log(err));
}
