const { Op } = require('sequelize');
const models = require('../models');
const nodemailer = require('nodemailer');

exports.send_email = (req, res, next) => {
    let sender = '';
    let senderPass = '';
    let reciever = '';
    let boxId = parseInt(req.query.boxId);
    let facultyId = parseInt(req.query.facultyId);
    let boxInTable = (facultyId-1)*9 + boxId;

    console.log(boxId);
    console.log(facultyId);

    console.log(boxInTable);

    models.Box.findOne({
        where: {
            id: boxInTable
        }
    }).then((box) => {
        reciever = box.email;
        models.Faculty.findOne({
            where: {
                id: facultyId
            }
        }).then((faculty) => {
            console.log(faculty.email);
            sender = faculty.email;
            senderPass = faculty.emailPass;
            console.log(sender);
            console.log(senderPass);
            console.log(reciever);

            let transport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 25,
                tls: {
                    rejectUnauthorized: false
                },
                auth: {
                   user: sender,
                   pass: senderPass
                }
            });

            const message = {
                from: sender, 
                to: reciever,         
                subject: 'باکس اساتید',
                text: 'آیتم جدیدی در باکس مربوط به شما قرار گرفت.'
            };
            transport.sendMail(message, function(err, info) {
                if (err) {
                  console.log(err);
                } else {
                  console.log('sent email');
                  res.sendStatus(200);
                }
            });
        }).catch(err => console.log(err));
    }).catch(console.log('hello'));
}