'use strict'

const users = require('../controllers/usersController');
const Router = require('koa-router');

const router = Router();

router.get('/users', users.getUsers);
router.get('/user', users.getUserByUsername);
router.post('/user', users.addUser);
router.delete('/user', users.deleteUser);
router.update('/user', users.updateUser);


module.exports = router;