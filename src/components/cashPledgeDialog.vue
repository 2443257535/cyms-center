<!-- 订金组件dialog -->
<template>
    <div class="cashpledge-dialog">
        <el-dialog
            title="订金"
            width="1000px"
            :visible.sync="cashPledgeMessage"
            :before-close="handleClose"
        >
           <el-row>
               <el-col :span="24">订金：<span class="money">{{ cashPledge }}</span></el-col>
           </el-row>
           <hr>
           <el-form v-for="(value,i) in formArr" :key="i" label-width="90px" class="form-container">
               <el-form-item label="支付方式">
                   <el-select v-model="value.paywayValue">
                       <el-option v-for="item in payway" :key="item.value" :label="item.label" :value="item.value"></el-option>
                   </el-select>
               </el-form-item>
               <el-form-item label="金额">
                   <el-input v-model="value.money"></el-input>
               </el-form-item>
               <el-form-item label="支付凭证">
                   <el-input v-model="value.voucher"></el-input>
               </el-form-item>
                   <el-button type="primary" size="small" @click="addFormArr">+</el-button>
                   <el-button type="primary" size="small" @click="deleteFormArr(i)" v-show="i != 0">-</el-button>
           </el-form>
           <div class="all-money">
               <span>支付合计：{{ totalMoney }}</span>
               <span class="money">仍需支付：{{ balance }}</span>
           </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose(true)">取消</el-button>
                <el-button type="primary" @click="handleClose(false)">打印账单</el-button>
                <el-button type="primary" @click="handleClose(false)">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props:['cashPledgeMessage'],
    data(){
        return{
            cashPledge: 400.00, //订金
            totalMoney: 110896.5, //支付合计
            balance: 0,//余额
            formArr: [{
                paywayValue: '',//支付方式
                money: '',//金额
                voucher: '',//支付凭证
            }],
            payway:[{
                value: 'xj',
                label: '现金'
            }, {
                value: 'zfb',
                label: '支付宝',
            }, {
                value: 'wx',
                label: '微信'
            }]
        }
    },
    created(){
    },
    methods:{
        handleClose(bool){
            if(!bool){
                this.$message.success('订台成功咯');
            }else{
                this.$message.info('取消订台');
            }
            this.$emit('cashPledgeValue',false);
        },
        addFormArr(){
            this.formArr.push({
                paywayValue: '',//支付方式
                money: '',//金额
                voucher: '',//支付凭证
            })
        },
        deleteFormArr(index){
            this.formArr.splice(index,1);
        }
    }
}
</script>

<style>
.all-money span{
    margin-right: 10px;
}
</style>
