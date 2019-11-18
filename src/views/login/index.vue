<template>
    <div class="login-container">
        <div class="logins">
            <h2>Login Form</h2>
            <el-form ref="form" :model="form" class="login-form">
                <el-form-item >
                    <i class="el-icon-star-on"></i>
                    <el-input type="text" v-model="form.userName"></el-input>
                </el-form-item>
                <el-form-item >
                    <i class="el-icon-edit"></i>
                    <el-input type="password" v-model="form.pass"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {requestLogin} from '@/api/api';
    import menuUtils from '@/untils/menuUtils';
    let routes = [];
    export default {
        data(){
            return{
                form:{
                    userName: 'csjt',
                    pass: 'admin'
                }
            }
        },
        created(){
            
        },
        methods:{
            handleLogin(){
                let loginParams = {username: this.form.userName, password: this.form.pass};
                    if(this.form.userName != 'csjt' && this.form.userName != 'admin'){
                        this.$message.error('用户名错误');
                    }else if(this.form.pass != 'admin'){
                        this.$message.error('密码错误');
                    }else{
                        this.$message.success('登录成功');
                        this.$store.commit('changeUserName',this.form.userName); //把登录账号名缓存
                        this.$router.push({
                            path: '/'
                        });
                        
                    }
                
                
            }
        }
    }
</script>

<style lang="scss">
.login-container{
    height: 100%;
    background-color: #304156;
    .logins{
        width: 520px;
        padding: 0 35px;
        position: absolute;
        left: 50%;
        margin-left: -250px;
        top: 150px;
        .login-form{
            margin-top: 20px;
            .el-form-item{
                border: 1px solid rgba(255, 255, 255, 0.1);
                background: rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                color: #454545;
                i{
                    display: inline-block;
                    width: 9%;
                    text-align: center;
                    line-height: 45px;
                    font-size: 1.5rem;
                    vertical-align: middle;
                    color: #fff;
                }
                .el-input{
                    width: 90%;
                    .el-input__inner{
                        background-color: transparent;
                        border: 0px;
                        -webkit-appearance: none;
                        border-radius: 0px;
                        padding: 0;
                        color: #fff;
                        height: 47px;
                        caret-color: #fff;
                    
                    }
                }   
                .el-button{
                    width: 100%;
                }
            }
        }
    }
    h2{
        margin: 0 auto;
        color: #fff;
        text-align:center;
    }
    
}
</style>
