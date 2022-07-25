<template>
  <div class='app-container'>
    <h1>tinymce</h1>
    <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
    <div v-html='tinymceHtml'></div>
  </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'
  import 'tinymce/themes/silver/theme'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/plugins/image' // 插入编辑图片
  import 'tinymce/plugins/link' // 超链接
  import 'tinymce/plugins/code' // 编辑源码
  import 'tinymce/plugins/table' // 表格
  import 'tinymce/plugins/lists' // 列表插件
  import 'tinymce/plugins/contextmenu' // 上下文菜单
  import 'tinymce/plugins/wordcount' // 字数统计
  import 'tinymce/plugins/colorpicker' // 调色盘
  import 'tinymce/plugins/textcolor' // 文字颜色
  import 'tinymce/plugins/fullscreen' // 全屏
  import 'tinymce/plugins/insertdatetime' // 插入当前日期时间

  export default {
    name: 'tinymce',
    data () {
      return {
        tinymceHtml: '请输入内容',
        init: {
          height: 400,  //  设置富文本编辑器高度
          language_url: '/tinymce/zh_CN.js', // 中文化 默认为英文
          language: 'zh_CN', // 设置富文本编辑器语言
          branding: false, // 关闭底部官网提示 默认true
          skin_url: '/tinymce/skins/ui/oxide',  // 主题路径
          content_css: `tinymce/skins/content/default/content.css`, // 富文本编辑器内容区域样式
          font_formats:'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n;宋体=宋体;黑体=黑体;仿宋=仿宋;微软雅黑=微软雅黑;楷体-GB2312=楷体-GB2312',
          plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu fullscreen insertdatetime', // 插件配置
          toolbar:
            ' undo redo | bold italic underline strikethrough | fontselect | fontsizeselect | styleselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | link unlink image code | removeformat | fullscreen | insertdatetime', // 工具栏配置
        }
      }
    },
    mounted () {
      tinymce.init({})
    },
    components: {Editor}
  }
</script>
