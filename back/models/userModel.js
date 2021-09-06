'use strict'

const {User, QueryTypes} = require('../config/sqlite')


// 新增用户
let addUser = async (data) => {
    try{
        let inData = {
            user_id:'',
            username: '',
            nickname: '',
            password: '',
            phone: '',
            avatar_url: '',
            is_manage: false,
            created_at: '',
            updated_at: '',
        }
        if (data.username && data.password){
            // 查询用户是否存在
            let isExistSql = 'select user_id from users where username=' + data.username;
            let isExist = await User.query(isExistSql, {type: QueryTypes.SELECT}).length
            if (isExist){
                return {
                    success: false,
                    info: '添加用户失败，用户已存在',
                    data: {},
                }
            }
            // 查询当前最大 user_id
            let max_user_id_sql = 'select max(user_id) from users';
            let max_user_id = await User.query(max_user_id_sql, {type: QueryTypes.SELECT})[0]['max(user_id)]'];
            if (max_user_id) {
                inData.user_id = max_user_id + 1;
            } else {
                inData.user_id = 1;
            }
            // 将 data 拥有的字段写入，没有的添加默认值
            if(data.nickname)
                inData.nickname = data.nickname;
            if(data.phone)
                inData.phone = data.phone;
            inData.username = data.username;
            inData.password = data.password;
            let timeDate = new Date();
            let res = await User.query('insert into users(user_id, username, nickname, password, phone, avatar_url, is_manage,' +
                'created_at, updated_at) values(?,?,?,?,?,?,?,?,?)', {type: QueryTypes.INSERT, replacements: Object.values(inData)});
            return {
                success: true,
                info: '添加用户成功',
                data: {
                    user_id: inData.user_id,
                    username: inData.username,
                },
            };
        }else {
            return {
                success: false,
                info: '添加用户失败，缺少必要参数',
                data: {},
            }
        }
    } catch (e) {
        return {
            success: false,
            info: '添加用户失败' + e,
            data: {},
        }
    }

}

// 删除用户


// 修改用户信息


// 查询指定user_id 和 username用户
let getUsers = async () => {
    let [users] = await User.query('select * from users', {raw: true, type:QueryTypes.SELECT})
}

//