<template>
  <div class='app-container'>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row :span="16">
        <el-col :span="8">
          <el-form-item label="名称" prop="name">
            <el-input clearable v-model="ruleForm.name" placeholder="名称只允许英文字母、中文汉字和中文括号" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="登录账号" prop="loginId">
            <el-input clearable v-model="ruleForm.loginId" placeholder="登录账号只允许大、小写字母、数字和下划线,必须以字母开头"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :span="16">
        <el-col :span="8">
          <el-form-item label="密码" prop="password">
            <el-input clearable v-model="ruleForm.password" placeholder="密码只允许大、小写字母和数字，必须三种都包含" show-password></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input clearable v-model="ruleForm.confirmPassword" placeholder="请确认密码" show-password></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :span="16">
        <el-col :span="8">
          <el-form-item label="身份证号" prop="idNumber">
            <el-input clearable v-model="ruleForm.idNumber" placeholder="请输入身份证号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="邮箱" prop="emile">
            <el-input clearable v-model="ruleForm.emile" placeholder="请输入邮箱"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :span="16">
        <el-col :span="8">
          <el-form-item label="手机号" prop="phone">
            <el-input clearable v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="短信验证码" prop="smsCode">
            <el-input clearable v-model="ruleForm.smsCode" placeholder="请输入短信验证码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-button v-if="!sendMsgDisabled" @click="sendMsg">获取验证码</el-button>
          <el-button plain v-if="sendMsgDisabled" disabled>{{ time + '秒后获取' }}</el-button>
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
import formRules from "@/utils/form-rules"
import checkRule from "@/utils/check-rule"

export default {
  name: 'FormIndex',
  data() {
    // 密码校验
    var checkPass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        loginId: '',
        password: '',
        confirmPassword: '',
        idNumber: '',
        emile: '',
        phone: '',
        smsCode: ''
      },
      // 发送验证码开关
      sendMsgDisabled: false,
      // 发送验证码倒计时
      time: 60,
      rules: {
        name: [
          {required: true, message: '请输入名称', trigger: 'blur'},
          {validator: formRules.checkName, trigger: 'blur'}
        ],
        loginId: [
          {required: true, message: '请输入登录账号', trigger: 'blur'},
          {validator: formRules.checkLoginId, trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 10, message: '登录账号长度3-10个字符', trigger: 'blur'},
          {validator: formRules.checkPassword, trigger: 'blur'}
        ],
        confirmPassword: [
          {required: true, message: '请输再次输入密码', trigger: 'blur'},
          {validator: checkPass2, trigger: 'blur'}
        ],
        idNumber: [
          {required: true, message: '请输入身份证号', trigger: 'blur'},
          {validator: formRules.checkIdNumber, trigger: 'blur'}
        ],
        emile: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          {validator: formRules.checkEmail, trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
          {validator: formRules.checkPhone, trigger: 'blur'}
        ],
        smsCode: [
          {required: true, message: '请输入短信验证码', trigger: 'blur'},
        ],
      }
    }
  },
  methods: {
    // 发送验证码
    sendMsg(){
      const that = this
      //调用接口
      if (that.ruleForm.phone === undefined || that.ruleForm.phone === "") {
        that.$message({message: "手机号不能为空", type: 'error'})
        return;
      } else if (!checkRule.checkPhone(that.ruleForm.phone)) {
        that.$message({message: "请输入正确的手机号", type: 'error'})
        return;
      }
      //
      that.sendMsgDisabled = true
      that.$message({message: "短信验证码已发送", type: 'success'})
      // 发送验证码的倒计时
      const interval = window.setInterval(function () {
        if ((that.time--) <= 0) {
          that.time = 60
          that.sendMsgDisabled = false
          window.clearInterval(interval)
        }
      }, 1000)
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({message: '提交成功', type: 'success'});
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
