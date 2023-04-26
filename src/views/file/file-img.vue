<template>
  <div class='app-container'>
    <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
      <el-row :span="11">
        <el-col :span="10">
          <el-form-item label="头像">
            <el-upload class="avatar-uploader" action :show-file-list="false" :http-request="uploadImg">
              <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "file-img",
  data() {
    return {
      ruleForm: {
        imageUrl: '',
      }
    }
  },
  methods: {
    // 上传图片
    uploadImg() {
      this.ruleForm.imageUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>

<style scoped lang="scss">
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
  border: 1px dashed dodgerblue;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
