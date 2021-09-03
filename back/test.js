const Sequelize = require('sequelize');

// 使用连接池
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './db/mywebsite.db',
    pool: {
        limit: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
// 当前中国时间, 返回 Date 对象
let timeNow = () => {
    return new Date(new Date().toUTCString());
}



// 定义一个 Model 用来与表之间建立映射
const User = sequelize.define('users', {
    // 即是表的结构，也是 Model 属性
    user_id: {
        type: Sequelize.INTEGER,
        // 不允许为空
        allowNull: false,
        // 唯一
        unique: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    nickname: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    created_at: {
        type: Sequelize.DATE,
    },
    updated_at: {
        type: Sequelize.DATE,
    },
    phone: {
        type: Sequelize.STRING,
    },
    avatar_url: {
        type: Sequelize.STRING,
    },

},
    {
        // 强制模型名字与表名相同
        freezeTableName: true,
        // 直接告知表名
        // tableName: user,
        // 是否打开时间戳，打开时间戳则
        timestamps: false,
    }
    );

// 将表强制与模型进行同步 -- 新建
let newUserTable = async () => {
   let res = await User.sync({
       // 新建一个表，如果此表存在则删除重建
       force: true,
   })
    console.log('-----------\n',res, '\n----------------');
}

// 将表强制与模型同步 -- 更新
let updateUserTable = async () => {
    let res = await User.sync({
        alter: true,
    })
}

// 测试链接
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('connection has been established successfully')
//         process.exit();
//     })
//     .catch( error => {
//         console.log(error)
//     });


// 插入数据

// (async () => {
//     let res = await User.create({
//         name: 'zyl',
//         password: '123',
//         created_at:  new Date(Date.now()+8*60*60*1000),
//     })
//     console.log(res);
//     console.log(Date(res.dataValues.updatedAt));
// })();
