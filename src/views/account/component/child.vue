<template>
    <div class="slot">
        <el-dialog 
            :title="title"
            :visible.sync="hide"
            :before-close="handleClose"
        >
            <div slot="title" class="header-title">
                <slot name="header"></slot>
            </div>
            <slot name="body" title="header"></slot>
        </el-dialog>
        
    </div>
</template>

<script>
export default {
    props: ['hide'],
    data () {
        return {
            show: true,
            title: '标题',
            text: '这是一段文本'
        }
    },
    created(){
    },
    methods: {
      handleClose() {
            this.$emit('handleClick',false);
      }
    }
}
</script>

<style>

</style>


