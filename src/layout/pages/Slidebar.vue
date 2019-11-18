<template>
    <div class="app-slidebar">
        <div class="img">
            <img src="../../assets/logo.png" alt="" v-show="$store.getters.logoShow">
        </div>
        <div v-if="homeShow" class="home-select">
            <HomeLeft></HomeLeft>
        </div>
        <div v-else class="position: relative;">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @select="handleClicks"
                @open="handleOpen"
                @close="handleClose"
                background-color="#304156"
                :unique-opened="true"
                :collapse = isCollapse
                :collapse-transition="false"
                :show-timeout="1000"
                :hide-timeout="800"
                router
            >
                <fragment v-for="item in value" :key="item.path">
                    <el-submenu v-if="item.fold"  :index="item.path">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="list in item.children" :key="list.path" :index="list.path" :class="list.class" >
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span>{{ list.title }}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="item.path" :class="item.class">
                        <i class="el-icon-location"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </fragment>
            </el-menu>
            
        </div>
    </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex';
import HomeLeft from './HomeLeft';
import vm from './components.js';
export default {
    components:{
        HomeLeft
    },
    props:['isCollapse'],
    data(){
        return{
            navBarName: this.$store.getters.slider,
            sliderList: [],
            first: false, //刷新页面后自动跳转第一个路由
            homeShow: true, //如果是首页，就不显示侧边导航 
            //isCollapses: null,//是否折叠
        }
    },
    created(){
        //如果刷新页面，自动跳转到当前第一个路由
        let obj = this;
        vm.$on('isFirstChange',function(data){
            obj.first = data;
            obj.homeShow = data;
        })
    },
    methods:{
        handleClicks(key,path){
            this.first = true;
            for(let i in this.value){ // 循环 value 
                this.value[i].class=""; // 清空导航栏 自定义 的class
                if(this.value[i].path == key){
                    if(this.value[i].path == key){ // 如果相同 
                        this.value[i].class="isActive"; // 添加class
                        this.$store.commit('TagsList',{ // 将点击的导航的信息存入 store tagsList
                            title: this.value[i].title,
                            path: this.value[i].path
                        });
                    }
                }else{
                    for(let j in this.value[i].children){
                        let child = this.value[i].children[j];
                        child.class = '';
                        if(child.path == key){
                            child.class="isActive";
                            this.$store.commit('TagsList',{
                                title: child.title,
                                path: child.path
                            })
                        }
                    }
                }
            }
        },
        
        handleOpen(key, keyPath) {
            console.log('open: '+key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log('close: '+key, keyPath);
        }
    },
    computed:{
        value(){
            this.navBarName = this.$store.getters.slider
            let routeList = this.$router.options.routes;
            if(this.navBarName == '/'){
                this.homeShow = true;
            }else{
                this.homeShow = false;
                for(let i in routeList){
                    if(routeList[i].path == this.navBarName){ //选中的 navbar
                        for(let j in routeList[i].children){
                            routeList[i].children[j].class=""; // 清空一级子路由下面的class
                            if(!this.first){
                                if(routeList[i].children[0].fold){ //判断是否有子路由
                                    for(let k in routeList[i].children[j].children){ // 清空二级子路由下面的class
                                        routeList[i].children[j].children[k].class = '';
                                    }
                                    routeList[i].children[0].children[0].class="isActive"; //第一个添加class 属性
                                    this.$store.commit('TagsList',{ //存到store TagsList
                                        title: routeList[i].children[0].children[0].title,
                                        path: routeList[i].children[0].children[0].path
                                    });
                                }else{
                                    routeList[i].children[0].class="isActive"; //第一个添加class 属性
                                    this.$store.commit('TagsList',{ //存到store TagsList
                                        title: routeList[i].children[0].title,
                                        path: routeList[i].children[0].path
                                    });
                                }
                                this.$router.push({path: routeList[i].path});
                            }
                        }
                        return routeList[i].children;
                    }
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
.home-select{
    color: #fff;
}
.img{
    text-align: center;
    img{
        width: 80%;
    }
}
.el-menu{
    background-color: $subMenuBg;
    border-right: 0;
    color: #fff;
    &:hover{
        background-color: $menuHover;
    }
    .el-menu-item{
        background-color: $subMenuBg;
        color: #fff;
        &:hover{
            color: $red;
        }
    }
    .el-submenu{ //el-submenu is-active
        border-bottom: 1px solid #5d5252;
        .el-menu-item{
            
        }
    }
    .el-menu--inline{
        .el-menu-item{
            background-color: rgb(38, 52, 69) !important;
        }
    }
    .isActive{
        color: $red;
        border-right: 2px solid $red;
    }
}
img{
    width: 100%;
    height: 50px;
}

</style>
