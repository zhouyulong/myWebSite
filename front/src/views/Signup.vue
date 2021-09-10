<template>
    <div>
        <div class="login-main">
            <div class="notes">
            </div>
            <div id="a-col-signup">
                <a-row type="flex" justify="center" ><h3>注册</h3></a-row>
                <a-row>
                    <a-col>
                        <a-input type="text" v-model="username" placeholder="username">
                            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                        </a-input>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col>
                        <a-input type="text" v-model="nickname" placeholder="nickname">
                            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                        </a-input>
                    </a-col>
                </a-row>
                <a-row>
                    <!--  使用 offset 可以将列向右侧偏-->

                    <a-col>
                        <a-input type="password" v-model="password1" placeholder="password">
                            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                        </a-input>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col >
                        <a-input type="password" v-model="password2" placeholder="password again" >
                            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                        </a-input>
                    </a-col>
                </a-row>

                <a-row type="flex" >
                    <a-button type="primary" style="width:100% ;">
                        注册
                    </a-button>
                </a-row>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                username: '',
                password1: '',
                password2: '',
                nickname: '',
            };
        },
        methods: {
            sumitSignup() {
                console.log("提交表单");
            },
        },
    }
</script>

<style>
    div.ant-row {
        margin: 15px 0;
    }
    #a-col-signup{
        border: 1px solid #DCDFE6;
        background-color: rgba(255, 255, 255);
        width: 350px;
        margin:  24px auto ;
        padding: 35px;
        text-align: center;
        box-shadow: 0 0 25px #909399;
        float: left;
        height: 400px;

    }
    .login-main{
        margin-top: 100px;
        height: 500px;
        width: 790px;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -395px;
        margin-top: -220px;
    }
    .notes{
        width: 340px;
        height: 400px;
        margin:  24px 0 0 48px;
        padding: 35px;
        font-size: 16px;
        background: rgba(0,0,0,.4);
        background-image: url("../assets/signup.jpg");
        float: left;
        box-shadow: 0 0 25px #909399;
    }
</style>