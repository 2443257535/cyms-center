<template>
    <div class="app-footer">
        集团名称：今天集团登陆帐号：{{ username }} 姓名：{{ username }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            username: this.$store.getters.username
        }
    }
}
</script>

<style>
.app-footer{
    height: 29px;
}
</style>
