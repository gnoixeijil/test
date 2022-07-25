<template>
    <!-- 具备一个宽高的dom -->
    <div ref="pie" :class="className" :style="{height: height,width: width}"></div>
</template>

<script>
// 导入echarts
import * as echarts from 'echarts';
// 导入主题
require('echarts/theme/macarons')
// 自适应
import resize from './mixins/resize'
export default {
  name: "pie-chart",
    mixins: [resize],
    // 接受父组件传递的值
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '400px'
        },
        // 左侧接受数据
        legendData:{
            type: Array,
            default: () => ['java','C','C++','python']
        },
        // 饼分配的数据
        seriesData: {
            type: Array,
            default: () => [
                {value: 600, name: "java"},
                {value: 200, name: "C"},
                {value: 100, name: "C++"},
                {value: 400, name: "python"},
            ]
        }
    },

    data(){
        return{
            // 接受chart实例
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
    mounted() {
        this.$nextTick(() =>{
            this.initChart()
        })

    },
    methods: {
        initChart(){
            // init第一个参数 ref定义的的，第二个参数主题
            this.chart = echarts.init(this.$refs.pie,'macarons')

            this.chart.setOption( {
                title: {
                    text: '开发语言统计',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: this.legendData
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: this.seriesData,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        }
    }
}
</script>
