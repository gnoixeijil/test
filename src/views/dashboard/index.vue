<template>
  <div class="dashboard-container">
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <!-- 饼状图 -->
        <el-card>
          <pie-chart />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <!-- 柱状图 -->
        <el-card>
          <bar-chart />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

export default {
  name: 'Dashboard',
  components: {PieChart,BarChart},
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
