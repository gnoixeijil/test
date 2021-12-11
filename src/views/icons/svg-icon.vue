<template>
  <div class="icons-container">

    <el-form :inline="true" :model="formInline">
      <el-row>
        <el-form-item label="图标名称">
          <el-input v-model="formInline.iconName" placeholder="图标名称">
            <svg-icon slot="prefix" :icon-class="formInline.iconName"></svg-icon>
            <el-button slot="append" type="primary" @click="chooseIcon" icon="el-icon-plus">选择图标</el-button>
          </el-input>
        </el-form-item>
      </el-row>
    </el-form>

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
    <!--  选择图标界面  -->
    <icon_choose ref="iconChoose" @closeIconDialog="close_dialog"></icon_choose>
  </div>
</template>

<script>
  import svgIcons from './svg-icons'
  import elementIcons from './element-icons'
  import icon_choose from './icon_choose'

  export default {
    components: { icon_choose },
    data() {
      return {
        svgIcons,
        elementIcons,
        formInline: {
          iconName: ''
        }

      }
    },

    methods: {
      generateIconCode(symbol) {
        return symbol
      },
      generateElementIconCode(symbol) {
        return symbol
      },
      handleClipboard(text, event) {
        // 图标名称
        this.formInline.iconName = text
      },
      // 选择图标
      chooseIcon() {
        this.$refs.iconChoose.open()
      },
      close_dialog(data) {
        if (data.length === 1) {
          if (data.name !== null && data.name !== undefined) {
            return null
          } else {
            this.formInline.iconName = data
          }
        } else {
          this.formInline.iconName = data
        }
      }

    }
  }
</script>

<style lang="scss" scoped>
  .icons-container {
    margin: 10px 20px 0;
    overflow: hidden;

    .tabPane {
      height: 600px;
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

  .svg-icon {
    height: 2.5em;
  }
</style>

