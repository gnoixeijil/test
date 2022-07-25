<template>
    <!-- 具备一个宽高的dom -->
    <div ref="bar" :class="className" :style="{height: height,width: width}"></div>
</template>

<script>
// 导入echart
import * as echarts from 'echarts';
// 导入主题
require('echarts/theme/macarons')
// 自适应
import resize from './mixins/resize'
export default {
    name: "bar-chart",
    mixins: [resize],
    // 接受父组件传递的值
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        height: {
            type: String,
            default: "400Px"
        },
        width: {
            type: String,
            default: '100%'
        },
        xAxisData: {
            type: Array,
            default: () =>['2020-01','2020-02','2020-03','2020-04','2020-05','2020-06']
        },
        seriesData: {
            type: Array,
            default: () =>['100','400','200','555','231','654']
        }
    },

    data(){
        return{
            chart: null
        }
    },
    // 当组件销毁之前会调用次钩子函数
    beforeDestroy(){
        if(!this.chart){
            return
        }
        // 注销
        this.chart.dispose()
        this.chart = null
    },
    mounted(){
        this.$nextTick(() => {
            this.initChart()
        })
    },
    methods: {
        initChart(){
            this.chart = echarts.init(this.$refs.bar,'macarons')
            this.chart.setOption({
                title: {
                    text: '统计',
                    left: 'center'
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.xAxisData,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: this.seriesData
                    }
                ]
            })
        }
    }
}
</script>
