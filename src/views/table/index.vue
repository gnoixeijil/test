<template>
  <div class='app-container'>
    <el-form :model="tableForm" ref="tableForm" class="demo-ruleForm">
      <el-table :data="tableForm.tableData" border>
        <el-table-column prop="name" label="姓名">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index + '.name'" :rules="{required: true, message: '姓名不能为空',trigger: 'blur'}">
              <el-input v-model="scope.row.name" placeholder="请输入姓名" clearable></el-input>
            </el-form-item>
          </template>
        </el-table-column>

        <el-table-column prop="documentType" label="证件类型">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index + '.documentType'" :rules="{required: true, message: '证件类型不能为空',trigger: 'change'}">
              <el-select clearable v-model="scope.row.documentType" filterable placeholder="请选择证件类型">
                <el-option v-for="item in documentTypeList" :key="item.id" :label="item.value" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </template>
        </el-table-column>

        <el-table-column prop="startTime" label="证件有效期开始" >
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index + '.startTime'" :rules="{required: true, message: '证件有效期开始不能为空',trigger: 'blur'}">
              <el-date-picker v-model="scope.row.startTime" type="date"  value-format="yyyy-MM-dd" placeholder="请选择"></el-date-picker>
            </el-form-item>
          </template>
        </el-table-column>

        <el-table-column prop="endTime" label="证件有效期截止" >
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index + '.endTime'" :rules="{required: true, message: '证件有效期开始不能为空',trigger: 'blur'}">
              <el-date-picker v-model="scope.row.endTime" type="date"  value-format="yyyy-MM-dd" placeholder="请选择"></el-date-picker>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <br><br>
    <div style="text-align: center;">
      <el-button type="primary" @click="submitForm('tableForm')">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      //
      documentTypeList:[
        {id: '1',value:'居民身份证'},
        {id: '2',value:'外国公民护照'},
        {id: '3',value:'港澳台同胞大陆通行证'},
        {id: '4',value:'其他'}
      ],
      tableForm:{
        tableData:[
          {
            name:'小明',
            documentType: '1',
            startTime: '2018-02-27',
            endTime: '2028-02-27'
          },
          {
            name:'',
            documentType: '2',
            startTime: '2018-02-27',
            endTime: ''
          }
        ]
      }
    }
  },
  methods:{
    submitForm(){
      this.$refs['tableForm'].validate((valid) => {
        if (valid) {
          this.$message({message: "提交成功", type: 'success'})
        }else {
          return false;
        }
      })
    }
  }
}
</script>
