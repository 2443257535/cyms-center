<template>
    <div class="app-tags" v-if="$store.getters.tagsShow">
        <div class="overflow-x">
            <el-tag size="small">
                <router-link to="/home/index">首页</router-link>
            </el-tag>
            <el-tag 
                size="small" 
                v-for="(item,i) in list" 
                :key="i" 
                closable
                
                @close="handleClose(item)"    
            >
                <router-link :to="item.path">{{ item.title }}</router-link>
            </el-tag>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:this.$store.getters.Tags,
            tagsShow: true,
        }
    },
    created(){

    },
    methods:{
        handleClose(i){
            console.log(i)
            //this.$store.commit('removeTagsList',i)
            this.list.splice(this.list.indexOf(i),1);
        }
    }
}
</script>

<style scoped lang="scss">
.app-tags{
    background-color: #f2f2f2;
    padding: 3px 5px;
    overflow-x: auto;
    .overflow-x{
        .el-tag--small{
            margin: 0 2px;
        }
        .router-link-active{
            color: #31B080;
        }
    }
}
</style>
