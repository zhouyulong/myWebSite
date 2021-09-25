'use strict'

const {Users, QueryTypes} = require('../config/db')
let User = Users;


// 根据 username 查询指定用户
let searchUserForUsernameIsExist = async (username) => {
    try{
        let searchSql = 'select user_id from users where username='+username;
        let res = await User.query(searchSql, {type: QueryTypes.SELECT});
        if(res.length){
            return {
                success: true,
                info: '查询成功',
                data: {
                    user: res,
                },
            }
        }else{
            return {
                success: false,
                info: '查询失败，无此用户',
                data: {},
            };
        }
    }catch (e){
        return {
            success: false,
            info: '查询用户失败: ' + e,
            data: {},
        }
    }
}

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
            let isExist = await User.query(isExistSql, {type: QueryTypes.SELECT})
            if (isExist.length){
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
            inData.created_at = timeDate;
            inData.updated_at = timeDate;
            let res = await User.query('insert into users(user_id, username, nickname, password, phone, avatar_url, is_manage,' +
                'created_at, updated_at) values(?,?,?,?,?,?,?,?,?)', {type: QueryTypes.INSERT, replacements: Object.values(inData)});
            if(res[1]){
                return {
                    success: true,
                    info: '添加用户成功',
                    data: {
                        user_id: inData.user_id,
                        username: inData.username,
                    },
                };
            } else {
                return {
                    success: false,
                    info: '添加用户失败',
                    data: {}
                }
            }
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
let deleteUser = async (data) => {
    try{
        if(data.username) {
            let searchSql = 'select user_id from users where username=' + data.username;
            let res = await User.query(searchSql, {type: QueryTypes.SELECT});
            if(res.length){
                let delSql = 'delete from users where username=' + data.username;
                let resDel = await User.query(delSql, {type: QueryTypes.DELETE});
                if(resDel) {
                    return {
                        success: true,
                        info: '删除用户成功',
                        data: {
                            username: data.username,
                        }
                    }
                }else{
                    return {
                        success: false,
                        info: '删除用户失败',
                        data: {},
                    }
                }
            }else{
                return {
                    success: false,
                    info: '删除用户失败，该用户不存在',
                    data: {}
                }
            }
        } else {
            return {
                success: false,
                info: '删除用户失败，参数有误，请输入要删除的用户名',
                data: {},
            }
        }
    }catch (e) {
        return {
            success: false,
            info: '删除用户失败: ' + e,
            data: {},
        }
    }
}

// 修改用户信息 电话和昵称
let updateUserPhoneOrNickname = async (data) => {
    try {
        if (data.username){
            let isExist = await searchUserForUsernameIsExist(data.username);
            let retSuccess = {
                success: true,
                info: '修改用户信息成功',
                data: {},
            };
            if (isExist.success){
                if (data.nickname && data.phone) {
                    let dateTime = new Date();
                    let updateSql = 'update users set nickname=' + data.nickname + ', phone=' + data.phone +', updated_at='+ dateTime + ' where username='+data.username;
                    let res = await User.query(updateSql, {type: QueryTypes.UPDATE});
                    if (res[1]) {
                        return retSuccess;
                    }
                    else {
                        return {
                            success: false,
                            info: '修改用户信息失败',
                            data: {},
                        }
                    }
                }else if(data.nickname){
                    let dateTime = new Date();
                    let updateSql = 'update users set nickname=' + data.nickname +', updated_at='+ dateTime + ' where username='+data.username;
                    let res = await User.query(updateSql, {type: QueryTypes.UPDATE});
                    if (res[1]) {
                        return retSuccess;
                    }
                    else {
                        return {
                            success: false,
                            info: '修改用户信息失败',
                            data: {},
                        }
                    }
                } else if(data.phone){
                    let dateTime = new Date();
                    let updateSql = 'update users set phone=' + data.phone  +', updated_at='+ dateTime + ' where username='+data.username;
                    let res = await User.query(updateSql, {type: QueryTypes.UPDATE});
                    if (res[1]) {
                        return retSuccess;
                    }
                    else {
                        return {
                            success: false,
                            info: '修改用户信息失败',
                            data: {},
                        }
                    }
                }else {
                    return {
                        success: false,
                        info: '修改用户信息失败，参数没有相关待修改信息',
                        data: {},
                    }
                }
            }else {
                return {
                    success: false,
                    info: '修改失败，用户不存在',
                    data: {},
                }
            }
        }else {
            return {
                success: false,
                info: '修改失败，参数有误，没有待修改 username',
                data: {},
            }
        }
    }catch (e) {
        return {
            success: false,
            info: '修改用户失败: '+e,
            data: {},
        };
    }
}

// 查询所有用户
let getUsers = async () => {
    try{
        let users = await User.query('select * from users', {type:QueryTypes.SELECT})
        if(users.length){
            return {
                success: true,
                info: '查询用户成功',
                data: {
                    users: users,
                },
            }
        }else{
            return {
                success: false,
                info: '查询用户失败：未查询到用户',
                data: {},
            }
        }
    }catch(err){
        return {
            success: false,
            info: '查询用户失败: ' + err,
            data: {},
        }
    }
}
// test

module.exports={
    addUser,
    deleteUser,
    updateUserPhoneOrNickname,
    getUsers,
}