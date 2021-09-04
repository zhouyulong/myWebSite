const path = require('path');
const Sequelize = require('sequelize');
const {QueryTypes} = require('sequelize');

// 使用连接池
let sequelize = new Sequelize('myWebSite', 'yulong', 'qwpo',{
    host: '192.168.0.110',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

let User = sequelize;
module.exports = {
    User,
    QueryTypes,
};

// 定义一个 Model 用来与表之间建立映射
// const User = sequelize.define('users', {
//     // 既是表的结构，也是Model属性
//     user_id: {
//         type: Sequelize.INTEGER,
//         // 不允许为空
//         allowNull: false,
//         // 唯一
//         unique: true,
//     },
//     username: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     nickname: {
//         type: Sequelize.STRING,
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     phone: {
//         type: Sequelize.STRING,
//     },
//     avatar_url: {
//         type: Sequelize.STRING,
//     },
//     is_manage: {
//         type: Sequelize.BOOLEAN,
//     },
//     created_at: {
//         type: Sequelize.DATE,
//         allowNull: false,
//     },
//     updated_at: {
//         type: Sequelize.DATE,
//         allowNull: false,
//     },
// },{
//     // 强制模型名字与表名相同，否则表名会是第一个参数 'users' 再复数 'userss'
//     freezeTableName: true,
//     // 直接告知表名
//     // tableName: 'users',
//     // 是否打开时间戳，打开自动生成 createdAt 和 updatedAT 字段
//     timestamps: false,
// });

// 将表强制与模型进行同步 -- 新建
// let newUserTable = async () => {
//     let res = await User.sync({
//         // 新建一个表，如果此表存在则删除重建
//         force: true,
//     })
//     console.log('-----------\n',res, '\n----------------');
// }
// newUserTable();

// 将表强制与模型同步 -- 更新
// let updateUserTable = async () => {
//     let res = await User.sync({
//         alter: true,
//     })
// }

// 测试链接
let testModel = ()=> {
    sequelize
        .authenticate()
        .then(() => {
            console.log('connection has been established successfully')
            process.exit();
        })
        .catch(error => {
            console.log(error)
        });
}
testModel();
// export default User;