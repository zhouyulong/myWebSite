const User = require('../models/userModel');

// 获取用户列表
let getUsers = async (ctx, next) => {
    try{

    }catch (e) {
        ctx.body = {}
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

