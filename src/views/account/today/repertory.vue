<template>
    <div class="repertory-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基础设置" name="jcsz">
                <h3>上传企业logo</h3>
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <img v-if="imageUrl" class="avatar" :src="imageUrl" alt="">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-tab-pane>
            <el-tab-pane label="品牌设置" name="ppsz">
                <h3>品牌介绍</h3>
            </el-tab-pane>
            <el-tab-pane label="推荐酒店" name="tjjd">推荐酒店</el-tab-pane>
            <el-tab-pane label="微信营销" name="wxyx">微信营销</el-tab-pane>
        </el-tabs>
        <div class="fixed-footer">
            <el-button type="primary" size="mini">保存</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeName: 'jcsz',
            imageUrl: '',
            
        }
    },
    methods:{
        handleClick(tab,event){
            console.log(tab,event)
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

<style>
h3{
    margin: 0;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
