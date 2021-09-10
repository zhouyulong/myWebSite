<template>
    <div >
        <!-- 头部导航   -->
        <a-layout id="components-layout-demo-top-side-2"  >
        <a-layout-header class="header" style="left: 0;top: 0;width: 100% ;position: fixed" >
            <div class="logo" />

            <!-- 导航栏-->
            <a-menu
                    theme="dark"
                    mode="horizontal"
                    :default-selected-keys="['home']"
                    :style="{ lineHeight: '64px',float:'left'}"
                    @click="navTo"
            >
                <a-menu-item key="home">
                    Home
                </a-menu-item>
                <a-menu-item key="about">
                    About
                </a-menu-item>
            </a-menu>
            <a-menu
                    theme="dark"
                    mode="horizontal"
                    :default-selected-keys="['home']"
                    :style="{ lineHeight: '64px',float:'right'}"
                    @click="navTo"
            >
            <a-menu-item key="login">
                登录/注册
            </a-menu-item>
            </a-menu>
            <!--搜索-->
            <a-form-model layout="inline" style=" float: right;height: 64px;">
                <a-form-model-item>
                    <a-input-search placeholder="search..." style="width: 200px " @search="onSearch" />
                </a-form-model-item>
            </a-form-model>
        </a-layout-header>
        </a-layout>
    </div>

</template>

<script>
    export default {
        name: "nav",
        methods:{
            navTo:function(e){
                let key = e.key;
                this.$router.push('/'+key);
            },
            onSearch:function () {
                console.log("搜索");
            }
        }
    }
</script>

<style scoped>
    #components-layout-demo-top-side-2{


    }
    #components-layout-demo-top-side-2 .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 28px 16px 0;
        float: left;
    }
</style>