<!-- 分页 组件dialog -->
<template>
    <div class="app-pagintion">
        <el-pagination
            class="pagination"
            background
            layout="prev,pager,next"
            :page-size="9"
            :total="total"
            @current-change="handleCurrentChange"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    props:['total'],
    data(){
        return{
            currentPage1:5
        }
    },
    mounted(){
        console.log(this.total+'...');
    },
    methods:{
        handleCurrentChange(val){
            console.log(val)
        }
    }
}
</script>

<style>

</style>
