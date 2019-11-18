<!--  预定 组件dialog -->
<template>
    <div class="reserve-dialog">
        <el-dialog
            title="预定"
            :visible.sync="dialogVisible"
            width="1000px"
            :before-close="handleClose"
            class="dialog"
        >
            <el-form
                ref="form"
                :model="form"
                label-width="90px"
                class="form-container"
            >
                <el-form-item label="台号">
                    <el-select v-model="tableNumberValue">
                        <el-option v-for="item in tableNumber" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用餐人数" required>
                    <el-input v-model="peopleCounting"></el-input>
                </el-form-item>
                <el-form-item label="用餐日期" required>
                    <el-input v-model="datesValue"></el-input>
                </el-form-item>
                <el-form-item label="用餐时段">
                    <el-select v-model="timeFrameValue">
                        <el-option v-for="item in timeFrame" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预订人" required>
                    <el-input v-model="peopleValue"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" required="">
                    <el-input v-model="phoneValue"></el-input>
                </el-form-item>
                <el-form-item label="客源">
                    <el-select v-model="sourceValue">
                        <el-option v-for="item in source" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="协议单位">
                    <el-select v-model="unitsValue">
                        <el-option v-for="item in  units" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="销售员">
                    <el-select v-model="salesmanValue">
                        <el-option v-for="item in  salesman" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input class="textarea" type="textarea" v-model="form.remark"></el-input>
                </el-form-item>
                <el-form-item label="支付方式" prop="paymentValue">
                    <el-select v-model="form.paymentValue">
                        <el-option v-for="item in  payment" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="金额" prop="money">
                    <el-input v-model="form.money"></el-input>
                </el-form-item>
                <el-form-item label="支付凭证" prop="payorder">
                    <el-input v-model="form.payorder"></el-input>
                </el-form-item>
                <el-button type="primary" size="small">+</el-button>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleServerRoom">预定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props:['dialogVisible'],
    data(){
        return{
            //dialogVisible: true
            form:{
                remark: '',//备注值
                paymentValue: '',//支付方式
                money: '',//金额
                payorder: '' //支付凭证
            },
            tableNumberValue: "",//台号值
            tableNumber: [{
                value: "4",
                label: "4号台"
            }, {
                value: "5",
                label: "5号台"
            }],
            peopleCounting: "",//用餐人数
            datesValue: "",//用餐日期
            timeFrameValue: "",//用餐时段
            timeFrame:[{
                value: "zaocan",
                label: "早餐"
            }, {
                value: "zhongcan",
                label: "中餐"
            }, {
                value: "wancan",
                label: "晚餐"
            }],
            peopleValue: "",// 预订人
            phoneValue: "",//联系方式
            sourceValue: "",//客源值
            source: [{
                value: "tuangou",
                label: "团购"
            }, {
                value: "sanke",
                label: "散客"
            }, {
                value: "yanxi",
                label: "宴席"
            }, {
                value: "huiyi",
                label: "会议"
            }],
            unitsValue: "",//协议单位值
            units:[],
            salesmanValue: "",//销售员值
            salesman:[{
                value: 'zhangsan',
                label: '张三'
            }, {
                value: 'lisi',
                label: '李四'
            }, {
                value: 'wangwu',
                label: '王五'
            }],
            payment:[{
                value: 'xianjin',
                label: '现金'
            }, {
                value: 'wx',
                label: '微信'
            }, {
                value: 'zfb',
                label: '支付宝'
            }]
            
        }
    },
    methods:{
        handleClose(){
            this.$emit('handleDialogValue',false);
        },
        handleServerRoom(){
            this.$message.success('预定成功')
            this.$emit('handleDialogValue',false);
        }
    }
}
</script>

<style>

</style>
