var express = require('express');
var router = express.Router();
const Login = require('../controllers/login');
const Homepage = require('../controllers/homepage');
const sendMail = require('../controllers/send_email');

router.get('/', Login.show_index);
router.post('/login', Login.authenticate);
router.get('/:[0-9]', Homepage.generate);
router.post('/:id', Homepage.edit);
router.get('/sendmail', sendMail.send_email);

module.exports = router;
