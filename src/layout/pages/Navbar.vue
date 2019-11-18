<template>
    <div class="app-navbar">
        <el-header>
            <el-menu
                :default-active="routePath"
                class="el-menu-demo"
                mode="horizontal"
                router
                @select="handleSelect"
            >
                <el-menu-item v-for="(item,i) in navBarList" :index="item.path" :key="i" :class="item.class">{{ item.title }}</el-menu-item>
            </el-menu>
            <div class="person-msg">
                <el-dropdown :hide-on-click="false">
                    <span class="el-dropdown-link">
                        admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" divided>
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item><span @click="handleOutLogin" >退出登录</span></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-header>
    </div>
</template>

<script>
let rou = [];
import {requestLogin} from '@/api/api';
import menuUtils from '@/untils/menuUtils';
import {mapMutations,mapGetters} from 'vuex';
import vm from './components.js';
export default {
    data(){
        return{
            navBarList: [],
            routePath: sessionStorage.routePath
        }
    },
    created(){
        let routes = this.$router.options.routes;
        this.axios.get('./static/json/api.json').then((res)=>{
            let menu = [];
            for(let i in res.data.data){
                let data = res.data.data[i];
                for(let j in routes){
                    if(routes[j].title != undefined){
                        if(data.title == routes[j].title){
                            routes[j].hidden = true;
                            routes[j].id = i+j;
                            menu.push(routes[j]);
                            this.navBarList.push(routes[j])
                        }
                    }
                }
                console.log(menu)
            }
            if(sessionStorage.navBarIndex == undefined){
                this.navBarList[0].class="isActive";
                this.handleSelect(this.navBarList[0].path);
            }else{
                this.handleSelect(sessionStorage.routePath);
            }

        }).catch((error) => {
            console.log(error)
        })
        /*requestLogin(this.$store.getters.username).then(res => {
            menuUtils(rou=[],res.data)
            let menu = [];
            console.log(res.data)
            for(let i in res.data){
                let data = res.data[i];
                for(let j in routes){
                    if(routes[j].title != undefined){
                        if(data.title == routes[j].title){
                            routes[j].hidden = true;
                            routes[j].id = i+j;
                            menu.push(routes[j]);
                            this.navBarList.push(routes[j])
                        }
                    }
                }
            }
            if(sessionStorage.navBarIndex == undefined){
                this.navBarList[0].class="isActive";
                this.handleSelect(this.navBarList[0].path);
            }else{
                this.handleSelect(sessionStorage.routePath);
            }
        }).catch(error =>{
            console.log(error)
        })*/
    },
    methods:{
        handleSelect(key,keypath){
            for(let i in this.navBarList){
                this.$set(this.navBarList[i],'class','');
                if(key == this.navBarList[i].path){
                    this.$set(this.navBarList[i],'class','isActive');
                    sessionStorage.navBarIndex = i;
                    sessionStorage.routePath = key;
                    this.routePath = sessionStorage.routePath;
                }
            }
            this.$store.commit('sliderChange',key);
            vm.$emit('isFirstChange',false);
        },
        handleOutLogin(){
            this.$router.push({
                path: '/login'
            })
            this.$store.commit('changeUserName','');
            sessionStorage.clear();
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
.el-header{
    padding: 0;
    background-color: $primary;
    position: relative;
    .el-menu{
        background-color: transparent;
        .el-menu-item{
            width: 96px;
            text-align: center;
            color: #fff;
            border-right: 1px solid #00000030;
            &:hover{
                background-color: $isPrimary;
            }
            &:focus{
                background-color: $isPrimary;
            }
        }
        .isActive{
            background-color: $isPrimary;
        }    
    }
    .person-msg{
        position: absolute;
        top: 50%;
        margin-top: -8px;
        right: 20px;
        cursor: pointer;
        .el-dropdown{
            color: #fff;
        }
    }
}
</style>
