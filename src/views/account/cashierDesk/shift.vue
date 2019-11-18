<template>
    <div class="shift-box page-content">
        <div class="container">
            <div class="column">
                <div class="row">
                    <div class="box" id="ones" style="height: 100%;"></div>
                </div>
                <div class="row">
                    <div class="box" id="twos" style="height: 100%;"></div>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <div class="box" id="threes" style="height: 100%;"></div>
                </div>
                <div class="row">
                    <div class="box" id="fours" style="height: 100%;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: true,
        }
    },
    mounted(){
        this.one();
        this.two();
        this.three();
        this.four();
    },
    methods: {
        one(){
            var myChart = this.$echarts.init(document.getElementById('ones'));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '原型图表'
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        data:[
                            {value:235, name:'视频广告'},
                            {value:274, name:'联盟广告'},
                            {value:310, name:'邮件营销'},
                            {value:335, name:'直接访问'},
                            {value:400, name:'搜索引擎'}
                        ]
                    }
                ]
            })
        },
        two(){
            var myChart = this.$echarts.init(document.getElementById('twos'));
            myChart.setOption({
                title: {
                    text: '点状图'
                },
                xAxis: {},
                yAxis: {},
                series: [{
                    symbolSize: 20,
                    data: [
                        [10.0, 8.04],
                        [8.0, 6.95],
                        [13.0, 7.58],
                        [9.0, 8.81],
                        [11.0, 8.33],
                        [14.0, 9.96],
                        [6.0, 7.24],
                        [4.0, 4.26],
                        [12.0, 10.84],
                        [7.0, 4.82],
                        [5.0, 5.68]
                    ],
                    type: 'scatter'
                }]
            })
        },
        three(){
            var myChart = this.$echarts.init(document.getElementById('threes'));
            myChart.setOption({
                title: {
                    text: '仪表盘'
                },
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        detail: {formatter:'{value}%'},
                        data: [{value: 50, name: '完成率'}]
                    }
                ]
            });
        },
        four(){
            var myChart = this.$echarts.init(document.getElementById('fours'));
            myChart.setOption({
                title: {
                    text: '柱状图'
                },
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '2015', '2016', '2017'],
                        ['Matcha Latte', 43.3, 85.8, 93.7],
                        ['Milk Tea', 83.1, 73.4, 55.1],
                        ['Cheese Cocoa', 86.4, 65.2, 82.5],
                        ['Walnut Brownie', 72.4, 53.9, 39.1]
                    ]
                },
                xAxis: {type: 'category'},
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [
                    {type: 'bar'},
                    {type: 'bar'},
                    {type: 'bar'}
                ]
            })
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
@mixin center($primary: #333){
    color: $primary;
    text-align: center;
}
@mixin height{
    height: 100%;
}
.container{
    height: 100%;
    display: flex;
    flex-direction: column;
    //align-content: center;
    .column{
        flex: 1;
        display: flex;
        flex-direction: row;
        //justify-content: space-between;
        align-items: center;
        .row{
            flex: 1;
            @include height;
            align-items: center;
            justify-content: center;
        }
    }
}

</style>
