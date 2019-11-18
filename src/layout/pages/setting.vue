<template>
    <div>
        <div class="setting" :style="{right: settingWidth}">
            <el-button class="primary-button" type="primary" :class="{rotate: showSetting,icon:true}" @click="settingChange">
                <i :class="icons"></i>
            </el-button>
           <div class="pages">
                <h3>setting is pages</h3>
                <div class="edgegap">
                    <div class="el-row ">
                        <span class="text">colors update</span>
                        <el-color-picker v-model="colors" class="right" @change="colorsChange"></el-color-picker>
                    </div>
                    <div class="el-row ">
                        <span class="text">open tags-view</span>
                        <el-switch 
                            class="right" 
                            v-model="tagsValue"
                            @change="tangsChange"
                        ></el-switch>
                    </div>
                    <div class="el-row ">
                        <span class="text">Sidebar Logo</span>
                        <el-switch
                            class="right" 
                            v-model="logoValue"
                            @change="logoChange"
                        ></el-switch>
                    </div>
                    
                </div>
                    
           </div>
        </div>
        <div class="shade-box" v-show="showSetting"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            icons: 'el-icon-setting',
            showSetting: false,
            settingWidth: '-300px',
            colors: '#409EFF',
            tagsValue: true,
            logoValue: true,
        }
    },
    methods:{
        settingChange(){
            if(!this.showSetting){
                this.settingWidth = '0';
                this.icons = 'el-icon-close';
            }else{
                this.icons = 'el-icon-setting';
                this.settingWidth = '-300px';
            }
            this.showSetting = !this.showSetting;
        },
        colorsChange(){
            console.log(this.colors)
        },
        tangsChange(val){
            this.$store.commit('tagsChange',val);
            if(val){
                this.$store.commit('changeMainsHeight',this.$store.getters.mainsHeight);
            }else{
                this.$store.commit('changeMainsHeight', this.$store.getters.mainsHeight-30)
            }
        },
        logoChange(val){
            this.$store.commit('logoChange',val);
        }
    }
}
</script>

<style scoped lang="scss">
.setting{
    width: 300px;
    background-color: #fff;
    height: 100%;
    position: fixed;
    top: 0;
    z-index:999;
    .primary-button{
        position: absolute;
        top:30%;
        left: -64px;
        font-size: 22px;
    }
        
}
.shade-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 99;
}
.pages{
    h3{
        text-align: center;
    }
    .edgegap{
        padding: 0 15px;
    }
    .el-row{
        line-height: 44px;
        .right{
            float: right;
        }
    }
}
.el-switch{
    margin-top: 10px;
}
.icon{
    i{
        transform: rotate(0deg);
        transition: all 2s;
    }
}
.rotate{
    i{
        transform: rotate(720deg);
        transition: all 3s;
    }
}
</style>
