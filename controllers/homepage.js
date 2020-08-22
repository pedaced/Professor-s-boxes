const models = require('../models');
var facultyId = 0;
var facultyName = '';

exports.generate = (req, res, next) => {
    console.log('reached here');
    res.sendFile('homepage.html', {root: './public'});
}

exports.get_boxes = (req, res, next) => {
    let id = req.query.id;

    resp = {};
    resp['box'] = [];

    models.Box.findAll({
        where: {
            facultyId: id
        }
    }).then(box => {
        // let obj = {};
        // let boxId = box.id % 9 === 0 ? 9 : box.id % 9; 
        // obj['id'] = boxId;
        // obj['prof'] = box.professor;
        // obj['email'] = box.email;
        // obj['mobileNo'] = box.mobileNo;
        // resp['box'].push()
        res.json(box);
    }).catch(err => res.send(err));
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
