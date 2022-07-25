<template>

  <el-dialog :title="titleName" :visible.sync="iconDialogVisible" custom-class="custom_dialog" :close-on-click-modal="false"
             :modal-append-to-body="false" width="40%"  :before-close="onClose" append-to-body>

    <div class="icons-container">
      <el-tabs type="border-card">
        <el-tab-pane label="彩色图标" class="tabPane">
          <div class="grid">
            <div v-for="item of svgIcons" :key="item" @click="handleClipboard(generateIconCode(item),$event)">
              <el-tooltip placement="top">
                <div slot="content">
                  {{ generateIconCode(item) }}
                </div>
                <div class="icon-item">
                  <svg-icon :icon-class="item" class-name="disabled"/>
                  <span>
                  {{ item }}
                </span>
                </div>
              </el-tooltip>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Element-UI官方图标" class="tabPane">
          <div class="grid">
            <div v-for="item of elementIcons" :key="item" @click="handleClipboard(generateElementIconCode(item),$event)">
              <el-tooltip placement="top">
                <div slot="content">
                  {{ generateElementIconCode(item) }}
                </div>
                <div class="icon-item">
                  <i :class="'el-icon-' + item"/>
                  <span>{{ item }}</span>
                </div>
              </el-tooltip>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-dialog>
</template>

<script>
  import svgIcons from './svg-icons'
  import elementIcons from './element-icons'

  export default {
    name: 'iconDialog',
    data() {
      return {
        svgIcons,
        elementIcons,
        titleName: '选择图标',
        iconDialogVisible: false
      }
    },

    methods: {
      open() {
        this.iconDialogVisible = true
      },
      generateIconCode(symbol) {
        return symbol
      },
      generateElementIconCode(symbol) {
        return symbol
      },
      handleClipboard(text, event) {
        this.onClose(text)
      },
      onClose(icon){
        this.iconDialogVisible = false
        this.$emit('closeIconDialog', icon)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icons-container {
    margin: 10px 20px 0;
    overflow: hidden;

    .tabPane{
      height: 250PX;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .grid {
      position: relative;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    .icon-item {
      margin: 20px;
      height: 85px;
      text-align: center;
      width: 100px;
      float: left;
      font-size: 30px;
      color: #24292e;
      cursor: pointer;
    }

    span {
      display: block;
      font-size: 16px;
      margin-top: 10px;
    }

    .disabled {
      pointer-events: none;
    }
  }
</style>
