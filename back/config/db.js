const Sequelize = require('sequelize');
const {QueryTypes} = require('sequelize');
const MySql = require('./mysqlConfig');

// 使用连接池
let sequelize = new Sequelize(MySql.DATABASE_NAME, MySql.USERNAME, MySql.PASSWORD,{
    host: MySql.HOST,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

let Users = sequelize;
module.exports = {
    Users,
    QueryTypes,
};
(async () => {
    // 查询用户最大
    // let maxUserID = await sequelize.query('select max(user_id) from users;', {type: QueryTypes.SELECT}); //[ { 'max(user_id)': null } ]
    // if (maxUserID[0]['max(user_id)'])
    // console.log(maxUserID)
    // console.log(maxUserID[0]['max(user_id)']); [ { 'max(user_id)': null } ]
    // let username = await sequelize.query('select user_id from users where username="112";', {type: QueryTypes.SELECT});
    // [ { user_id: 1 } ]
    // if(username.length){
    //     console.log(username);
    // }
    // 添加测试
    // let dateTime = new Date();
    // let data = {
    //     user_id: 12,
    //     username: 'he',
    //     password: '123',
    //     phone: '186',
    //     avatar_url: '',
    //     is_manage: false,
    //     created_at: dateTime,
    //     updated_at: dateTime,
    //     nickname: 'nickhe',
    // }
    // let insertUser = await sequelize.query('insert into users(user_id, username, password, phone, avatar_url, is_manage, ' +
    //     'created_at, updated_at, nickname) values(?,?,?,?,?,?,?,?,?)', {type: QueryTypes.INSERT, replacements: Object.values(data)});
    // console.log(insertUser);
    //----------------------------
    // for (let i=1; i<20; i++){
    //     let date_time = await new Date();
    //     let user_id = i
    //     let data = {
    //         user_id : user_id,
    //         username : user_id.toString(),
    //         password : 'password' + user_id.toString(),
    //         phone : '186',
    //         is_manage : false,
    //         avatar_url : '',
    //         created_at : date_time,
    //         updated_at : date_time,
    //         nickname : 'nickname' + user_id.toString(),
    //     }
    //     let insertSql = 'insert into users(user_id, username, password, phone, is_manage, avatar_url, created_at,' +
    //         'updated_at, nickname) values(?,?,?,?,?,?,?,?,?)';
    //     let insertUser = await sequelize.query(insertSql, {type: QueryTypes.INSERT, replacements: Object.values(data)});
    //     console.log('----------------\n', insertUser, '\n-------------');
    // }

    // let updateSql = 'update users set nickname="hay" where username="12"';
    // let res = await sequelize.query(updateSql, {type: QueryTypes.UPDATE}); // return: [undefined,1]
    // console.log(res);
})();





// ------------- 下为 使用 sequelize 对象操作数据方法 ------
// 定义一个 Model 用来与表之间建立映射
const User = sequelize.define('users', {
    // 既是表的结构，也是Model属性
    user_id: {
        type: Sequelize.INTEGER,
        // 不允许为空
        allowNull: false,
        // 唯一
        unique: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    nickname: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
    },
    avatar_url: {
        type: Sequelize.STRING,
    },
    is_manage: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    created_at: {
        type: Sequelize.DATE,
        // allowNull: false,
    },
    updated_at: {
        type: Sequelize.DATE,
        // allowNull: false,
    },
},{
    // 强制模型名字与表名相同，否则表名会是第一个参数 'users' 再复数 'userss'
    freezeTableName: true,
    // 直接告知表名
    // tableName: 'users',
    // 是否打开时间戳，打开自动生成 createdAt 和 updatedAT 字段
    timestamps: false,
});


// 将表强制与模型进行同步 -- 新建
let newUserTable = async () => {
    let res = await User.sync({
        // 新建一个表，如果此表存在则删除重建
        force: true,
    })
    console.log('-----------\n',res, '\n----------------');
}
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
// testModel();
// export default User;