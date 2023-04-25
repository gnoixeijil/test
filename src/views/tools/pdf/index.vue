<template>
  <div class='app-container'>
    <el-button @click="viewPdf">预览PDF</el-button>

    <el-dialog title="PDF预览" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
      <pdf :src="pdfUrl"></pdf>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: "index",
  components: {pdf},
  data() {
    return {
      dialogVisible: false,
      pdfUrl: 'https://uat.ouyeelf.com/cap-interface/common/attachment/download?id=aecb87fef0d749d699351d8309d56b8d'
    }
  },
  methods: {
    viewPdf() {
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
