var express = require('express');
var router = express.Router();
const Login = require('../controllers/login');
const Homepage = require('../controllers/homepage');
const sendMail = require('../controllers/send_email');

router.get('/boxes', Homepage.get_boxes);
router.get('/', Login.show_index);
router.get('/sendmail', sendMail.send_email);
router.post('/login', Login.authenticate);
router.get('/:id', Homepage.generate);
router.post('/:id', Homepage.edit);
router.get('/seed/:id', Login.seed);
router.get('/show/:id', Login.show_all);
module.exports = router;
