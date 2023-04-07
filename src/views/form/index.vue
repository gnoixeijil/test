<template>
    <div class='app-container'>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-row>
            <el-col :span="6">
              <el-form-item label="名称" prop="password">
                <el-input v-model="ruleForm.password" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="地址" prop="address">
                <el-input  v-model="ruleForm.address" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="邮箱" prop="emile">
                <el-input  v-model="ruleForm.emile" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
            

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'form-index',
  data(){
    // 手机号校验
    var phonePass = (rule, value, callback) => {
      var reg=/^1[3456789]\d{9}$/;
      if (!reg.test(value)) {
            callback(new Error('请输入正确的手机号'));
      }else{
        callback();
      }
    };
    // 邮箱校验
    var  emilePass= (rule, value, callback) => {
      var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!reg.test(value)) {
            callback(new Error('请输入正确的邮箱'));
      }else{
        callback();
      }
    };
    return{
        ruleForm: {
            password:'',
            address: '',
            phone: '',
            emile:''
        },
        rules:{
            password:[
              { required: true, message: '请输入名称', trigger: 'blur' },
            ],
            address:[
              { required: true, message: '请输入地址', trigger: 'blur' },
            ],
            phone:[
              { required: true, message: '请输入手机号', trigger: 'blur' },
              { validator: phonePass, trigger: 'blur' }
            ],
            emile:[
              { required: true, message: '请输入邮箱', trigger: 'blur' },
              { validator: emilePass, trigger: 'blur' }
            ],
        }
    }
  },
  methods: {
    // 提交
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({message: '提交成功',type: 'success'});
          } else {
            return false;
          }
        });
    },
    // 重置
    resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
  
}
</script>