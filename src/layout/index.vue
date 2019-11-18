<template>
    <div class="layout">
        <el-container>
            <el-aside :width="asideWidth">
                <Slidebar :isCollapse="isCollapse" @sildeBarChange="asideChange"></Slidebar>
            </el-aside>
            <el-container>
                <Navbar></Navbar>
                <Tags></Tags>
                <el-main id="mains">
                    <div class="fold-slidebar" @click="foldSlidebarChange">
                        <i v-if="!isCollapse" class="el-icon-arrow-left"></i>
                        <i v-else class="el-icon-arrow-right"></i>
                    </div>
                    <router-view />
                    <div class="setting">
                        <!-- v-show="showSetting" -->
                        <setting ></setting>
                    </div>
                </el-main>
            <el-footer height="30px">
                <Footer></Footer>
            </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { Navbar,Slidebar,Tags,setting,Footer } from './pages';
export default {
    name: 'layout',
    components:{
        Navbar,
        Slidebar,
        Tags,
        setting,
        Footer
    },
    data(){
        return{
            navBarList: [],
            asideWidth: '240px',
            isCollapse: false, //aside 折叠
             
        }
    },
    mounted(){
        this.$store.commit('changeMainsHeight',document.getElementById('mains').offsetHeight);
    },
    methods: {
        asideChange(data){
            this.asideWidth = data;
        },
        foldSlidebarChange(){
            console.log(this.$store.getters.slider)
            if(!this.isCollapse){
                if(this.$store.getters.slider == '/'){
                    this.asideWidth = '0';
                }else{
                    this.asideWidth = '64px';
                }
            }else{
                this.asideWidth = '240px';
            }
            this.isCollapse = !this.isCollapse;
        },
        settingChange(){
            this.showSetting = !this.showSetting;
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
@import '@/styles/variables.scss';
.layout{
    height: 100%;
    .el-container{
        height: 100%;
        .el-header{
            .el-menu.el-menu--horizontal{
                border-bottom: 1px solid $menuActiveText;
            }
        }
        .el-aside{
            height: 100%;
            margin-bottom: 0;
        }
        .el-main{
            margin-bottom: 30px;
            .fold-slidebar{
                background-color: #eee;
                width: 10px;
                height:100%;
                line-height: 100%;
                display: inline-block;
                position:absolute;
                left: 0;
                top:0;
                z-index:1;
                cursor: pointer;
                i{
                    position: absolute;
                    top: 45%;
                    left: 0;
                }
            }
        }
        .el-footer{
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            border-top: 1px solid #304156;
            line-height: 30px;
            color: #fff;
            background-color: #304156;
        }
        
    }
}

</style>


