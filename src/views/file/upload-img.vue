<template>
  <div class='app-container'>
    <el-form>
      <el-form-item label="上传凭证" prop="credentials" :required="true">
        <el-upload class="avatar-uploader"
                   action
                   :http-request="uploadImg"
                   :show-file-list="false"
                   :disabled="uploadBoolean">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <!--页面新增删除和预览-->
          <span v-if="imageUrl" class="el-upload-list__item-actions">
              <span class="upload-icon">
                  <span class="el-uploads-span" style="margin-right: 10px;" @click="imgPre">
                      <i class="el-icon-zoom-in"></i>
                  </span>
                  <span class="el-upload-span" @click="imgDel">
                      <i class="el-icon-delete"></i>
                  </span>
              </span>
          </span>
          <el-dialog :visible.sync="oploadDialogVisible" size="tiny">
            <img width="60%" :src="imageUrl" alt="">
          </el-dialog>
        </el-upload>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>
export default {
  name: "upload-img",
  data() {
    return {
      uploadBoolean: false,
      imageUrl: '',
      oploadDialogVisible: false,
    }
  },
  methods: {
    // 上传图片
    uploadImg(item) {
      var fileType = item.file.type
      var fileSize = item.file.size
      var fileTypes = ['image/jpg','image/jpeg', 'image/png','image/bmp','application/pdf'];
      const isJPG = fileTypes.includes(fileType);
      const isLt4M = fileSize / 1024 / 1024 < 4
      if(!isJPG){
        this.$message({message: '仅支持 .jpg、.jpeg、.png、.bmp、.pdf格式', type: 'error'})
        return
      }
      if (!isLt4M) {
        this.$message.error('上传文件大小不能超过 4MB!');
        return
      }
      this.imageUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      this.uploadBoolean = true
    },
    // 预览
    imgPre() {
      this.oploadDialogVisible = true
    },
    // 删除
    imgDel() {
      this.imageUrl = ''
      let _this = this
      setTimeout(function () {
        console.log(_this)
        _this.uploadBoolean = false
      }, 1000)
    },
  }

}
</script>

<style scoped>
.avatar-uploader >>> .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.el-upload-list__item-actions:hover span {
  display: inline-block;
}

.el-icon-zoom-in:before {
  /*content: "\E626";*/
}

.el-icon-delete:before {
  /*content: "\E612";*/
}

.el-upload-list__item-actions:hover {
  opacity: 1;
}

.el-upload-list__item-actions {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: default;
  text-align: center;
  color: #fff;
  opacity: 0;
  font-size: 20px;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s;
}

.avatar-uploader >>> .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}

.avatar {
  width: 150px;
  /*height: 150px;*/
  display: block;
}

.upload-icon {
  position: absolute;
  top: 50%;
  margin-left: -28px;
  margin-top: -18px;
}

.dialogBox >>> .el-dialog {
  top: 30% !important;
  width: 30%;
}
</style>
