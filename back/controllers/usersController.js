const User = require('../models/userModel');

// 获取用户列表
let getUsers = async (ctx, next) => {
    try{
        let users = await User.getUsers();
        if(users.success){
            ctx.status = 200,
            ctx.body = {
                success: true,
                msg: 'Add user succuessfully',
                data: users.data.users,
            }
        }else{
            ctx.status = 200,
            ctx.body = {
                success: false,
                msg: 'Add user unsuccessfully',
                data: [],
            }
        }
    }catch (e) {
        ctx.body = {
            success: false,
            msg: 'Add user unsuccessfully',
            data: [],
        }
    }
}

// 新增用户

let addUser = async (ctx, next) => {

}


// 根据 username 删除用户

let deleteUser = async (ctx, next) => {

}


// 修改用户 nickname 或 phone

let updateUser = async(ctx, next) => {

}

// 查询指定用户
let getUserByUsername = async(ctx, next) => {

}

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    getUserByUsername,
}

