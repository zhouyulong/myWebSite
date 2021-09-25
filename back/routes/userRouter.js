'use strict'

const users = require('../controllers/usersController');
const Router = require('koa-router');

const router = Router();

/**
 * @swagger
 * /v1.0/api/user/users:
 *  get:
 *      description: 获取用户列表
 *      tags: [用户管理]
 *      responses:
 *          '200':
 *              description: OK
 *              schema: # 返回数据说明
 *                  type: 'object'
 *                  properties:
 *                      success:
 *                          type: 'boolean'
 *                      data:
 *                          type: 'object'
 *                          description: 返回数据
 *                      msg:
 *                          type: 'string'
 *                          description: 返回状态描述
 *          '400':
 *              description: 返回参数错误
 *          '404':
 *              description: Page not found
 */
router.get('/users', users.getUsers);


router.get('/user', users.getUserByUsername);
router.post('/user', users.addUser);
router.delete('/user', users.deleteUser);
router.put('/user', users.updateUser);


module.exports = router;